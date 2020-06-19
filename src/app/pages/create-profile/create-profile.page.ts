import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from "@angular/forms";
import { serviceProfile } from '../shared2/serviceProfile';
import { Profiles } from '../shared2/profile';
import { analytics } from 'firebase';



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {
  bookingForm: FormGroup;

 

  constructor(
    private aptService: serviceProfile,
    private router: Router,
    public fb: FormBuilder,
   

  ) {
    
 }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: ['']
    })

  
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home/profile']);
      })
        .catch(error => console.log(error));
    }
  }
}

