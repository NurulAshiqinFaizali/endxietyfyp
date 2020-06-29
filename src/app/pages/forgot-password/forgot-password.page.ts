import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "C:/Users/ashmg/endxietyfyp/src/app/shared/authentication-service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}

