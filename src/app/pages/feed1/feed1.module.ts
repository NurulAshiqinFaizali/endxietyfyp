import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feed1PageRoutingModule } from './feed1-routing.module';

import { Feed1Page } from './feed1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feed1PageRoutingModule
  ],
  declarations: [Feed1Page]
})
export class Feed1PageModule {}
