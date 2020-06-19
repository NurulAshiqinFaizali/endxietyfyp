import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from "@angular/forms";
import { serviceContact } from '../shared3/serviceContact';
import { Contacts } from '../shared3/contact';
import { analytics } from 'firebase';




@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {
  bookingForm: FormGroup;

 

  constructor(
    private aptService: serviceContact,
    private router: Router,
    public fb: FormBuilder,
   

  ) {
    
 }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
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
        this.router.navigate(['/home/contact']);
      })
        .catch(error => console.log(error));
    }
  }
}
