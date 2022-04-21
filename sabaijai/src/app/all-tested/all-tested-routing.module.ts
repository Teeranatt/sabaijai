import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTestedPage } from './all-tested.page';

const routes: Routes = [
  {
    path: '',
    component: AllTestedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllTestedPageRoutingModule {}
