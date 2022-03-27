import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-user', 
    pathMatch: 'full'
  },
  {
    path: 'login-user',
    loadChildren: () => import('./login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'registerr',
    loadChildren: () => import('./registerr/registerr.module').then( m => m.RegisterrPageModule)
  },
  {
    path: 'depressiontest/:id',
    loadChildren: () => import('./depressiontest/depressiontest.module').then( m => m.DepressiontestPageModule)
  },
  {
    path: 'stress-test/:id',
    loadChildren: () => import('./stress-test/stress-test.module').then( m => m.StressTestPageModule)
  },
  {
    path: 'diary/:id',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'alldairy/:id',
    loadChildren: () => import('./alldairy/alldairy.module').then( m => m.AlldairyPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
