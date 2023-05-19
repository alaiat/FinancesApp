import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then( m => m.CurrencyPageModule)
  },
  {
    path: 'tipcalc',
    loadChildren: () => import('./tipcalc/tipcalc.module').then( m => m.TipcalcPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'bulb-tips',
    loadChildren: () => import('./bulb-tips/bulb-tips.module').then( m => m.BulbTipsPageModule)
  },
  {
    path: 'expense-check',
    loadChildren: () => import('./expense-check/expense-check.module').then( m => m.ExpenseCheckPageModule)
  },  {
    path: 'remove-category',
    loadChildren: () => import('./remove-category/remove-category.module').then( m => m.RemoveCategoryPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
