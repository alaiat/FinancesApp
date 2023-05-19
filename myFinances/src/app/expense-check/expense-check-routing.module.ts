import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseCheckPage } from './expense-check.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseCheckPageRoutingModule {}
