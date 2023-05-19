import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseCheckPageRoutingModule } from './expense-check-routing.module';

import { ExpenseCheckPage } from './expense-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseCheckPageRoutingModule
  ],
  declarations: [ExpenseCheckPage]
})
export class ExpenseCheckPageModule {}
