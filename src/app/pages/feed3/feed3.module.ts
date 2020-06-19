import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Feed3PageRoutingModule } from './feed3-routing.module';

import { Feed3Page } from './feed3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Feed3PageRoutingModule
  ],
  declarations: [Feed3Page]
})
export class Feed3PageModule {}
