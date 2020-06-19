import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndxietyPageRoutingModule } from './endxiety-routing.module';

import { EndxietyPage } from './endxiety.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndxietyPageRoutingModule
  ],
  declarations: [EndxietyPage]
})
export class EndxietyPageModule {}
