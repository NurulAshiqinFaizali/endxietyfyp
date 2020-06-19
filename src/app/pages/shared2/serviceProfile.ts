import { Injectable } from '@angular/core';
import { Profiles } from './profile';
import { AngularFireDatabase, AngularFireList, AngularFireObject,  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class serviceProfile {
  bookingListRef: AngularFireList<any> ;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = db.list('/Profiles');
    this.bookingRef = db.object('/Profiles');
  
   }

  // Create
  createBooking(apt: Profiles) {
    return this.bookingListRef.push({
        firstName: apt.firstName,
        lastName: apt.lastName,
        email: apt.email,
        mobile: apt.mobile
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/Profiles/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/Profiles');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Profiles) {
    return this.bookingRef.update({
      firstName: apt.firstName,
      lastName: apt.lastName,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/Profiles/' + id);
    this.bookingRef.remove();
  }
}