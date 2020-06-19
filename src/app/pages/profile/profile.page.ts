import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "/home/ash/endxietyfyp/src/app/shared/authentication-service";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { serviceProfile } from '../shared2/serviceProfile';
import { Profiles } from '../shared2/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  Bookings = [];
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private aptService: serviceProfile
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Profiles);
      })
    })
  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)
    }
  }

}
