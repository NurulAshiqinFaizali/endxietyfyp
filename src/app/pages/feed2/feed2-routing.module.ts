import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feed2Page } from './feed2.page';

const routes: Routes = [
  {
    path: '',
    component: Feed2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feed2PageRoutingModule {}
