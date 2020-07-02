import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-endxiety',
  templateUrl: './endxiety.page.html',
  styleUrls: ['./endxiety.page.scss'],
})
export class EndxietyPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {

  }


    nextpage1() {
    this.route.navigate(['/songs']);

}

nextpage2() {
  this.route.navigate(['/breathe']);

}

nextpage3() {
  this.route.navigate(['/call']);

}

nextpage4() {
  this.route.navigate(['/exercise']);

}

}
