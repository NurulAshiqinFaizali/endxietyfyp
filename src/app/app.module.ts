
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CallNumber } from '@ionic-native/call-number/ngx';


//  firebase imports, remove what you don't require

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, AngularFireDatabaseModule, AngularFirestoreModule, BrowserModule,
    ReactiveFormsModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}