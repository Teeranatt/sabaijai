import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepressiontestPage } from './depressiontest.page';

const routes: Routes = [
  {
    path: '',
    component: DepressiontestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepressiontestPageRoutingModule {}
