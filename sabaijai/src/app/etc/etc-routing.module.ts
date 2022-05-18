import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtcPage } from './etc.page';

const routes: Routes = [
  {
    path: '',
    component: EtcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtcPageRoutingModule {}
