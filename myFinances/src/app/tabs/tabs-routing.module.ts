import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'goals',
        loadChildren: () => import('../goals/goals.module').then(m => m.GoalsPageModule)
      },
      {
        path: 'goals_loggeado',
        loadChildren: () => import('../goals_loggeado/goalsLog.module').then(m => m.GoalsLogPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settingsPage/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'settings_loggeado',
        loadChildren: () => import('../settingsLogPage/settingsLog.module').then(m => m.SettingsLogPageModule)
      },
      {
        path: 'home_loggeado',
        loadChildren: () => import('../home_loggeado/homeL.module').then(m => m.HomeLogPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
