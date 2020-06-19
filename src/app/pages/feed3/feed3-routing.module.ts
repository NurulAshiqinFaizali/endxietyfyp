import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feed3Page } from './feed3.page';

const routes: Routes = [
  {
    path: '',
    component: Feed3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feed3PageRoutingModule {}
