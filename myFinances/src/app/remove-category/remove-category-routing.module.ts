import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveCategoryPage } from './remove-category.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveCategoryPageRoutingModule {}
