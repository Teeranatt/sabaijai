import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'login-user',
    loadChildren: () => import('./login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'registerr',
    loadChildren: () => import('./registerr/registerr.module').then( m => m.RegisterrPageModule)
  },
  {
    path: 'depressiontest',
    loadChildren: () => import('./depressiontest/depressiontest.module').then( m => m.DepressiontestPageModule)
  },
  {
    path: 'stress-test',
    loadChildren: () => import('./stress-test/stress-test.module').then( m => m.StressTestPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
