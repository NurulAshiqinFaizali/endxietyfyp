import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "C:/Users/ashmg/endxietyfyp/src/app/shared/authentication-service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}