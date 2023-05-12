import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLogPage } from './settingsLog.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsLogPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsLogPageRoutingModule {}
