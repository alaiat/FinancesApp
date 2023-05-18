import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulbTipsPage } from './bulb-tips.page';

const routes: Routes = [
  {
    path: '',
    component: BulbTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulbTipsPageRoutingModule {}
