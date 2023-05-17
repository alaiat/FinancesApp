import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipcalcPageRoutingModule } from './tipcalc-routing.module';

import { TipcalcPage } from './tipcalc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipcalcPageRoutingModule
  ],
  declarations: [TipcalcPage]
})
export class TipcalcPageModule {}
