import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulbTipsPageRoutingModule } from './bulb-tips-routing.module';

import { BulbTipsPage } from './bulb-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulbTipsPageRoutingModule
  ],
  declarations: [BulbTipsPage]
})
export class BulbTipsPageModule {}
