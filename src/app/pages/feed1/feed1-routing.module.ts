import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feed1Page } from './feed1.page';

const routes: Routes = [
  {
    path: '',
    component: Feed1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feed1PageRoutingModule {}
