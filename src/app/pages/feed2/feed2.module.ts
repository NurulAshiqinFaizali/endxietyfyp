import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feed2PageRoutingModule } from './feed2-routing.module';

import { Feed2Page } from './feed2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feed2PageRoutingModule
  ],
  declarations: [Feed2Page]
})
export class Feed2PageModule {}
