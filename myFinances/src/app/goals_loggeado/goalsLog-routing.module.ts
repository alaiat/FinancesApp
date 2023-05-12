import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsLogPage } from './goalsLog.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsLogPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsLogPageRoutingModule {}
