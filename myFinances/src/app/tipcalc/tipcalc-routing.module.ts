import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipcalcPage } from './tipcalc.page';

const routes: Routes = [
  {
    path: '',
    component: TipcalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipcalcPageRoutingModule {}
