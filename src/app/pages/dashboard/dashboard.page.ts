import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "C:/Users/ashmg/endxietyfyp/src/app/shared/authentication-service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(

    
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    
  }

}
