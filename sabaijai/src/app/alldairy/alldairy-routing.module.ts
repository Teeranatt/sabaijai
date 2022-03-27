import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlldairyPage } from './alldairy.page';

const routes: Routes = [
  {
    path: '',
    component: AlldairyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlldairyPageRoutingModule {}
