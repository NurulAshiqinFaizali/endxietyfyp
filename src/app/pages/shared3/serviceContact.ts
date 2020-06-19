import { Injectable } from '@angular/core';
import { Contacts } from './contact';
import { AngularFireDatabase, AngularFireList, AngularFireObject,  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class serviceContact{
  bookingListRef: AngularFireList<any> ;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = db.list('/Contacts');
    this.bookingRef = db.object('/Contacts');
  
   }

  // Create
  createBooking(apt: Contacts) {
    return this.bookingListRef.push({
        name: apt.name,
        mobile: apt.mobile
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/Contacts/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/Contacts');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Contacts) {
    return this.bookingRef.update({
        name: apt.name,
        mobile: apt.mobile
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/Contacts/' + id);
    this.bookingRef.remove();
  }
}