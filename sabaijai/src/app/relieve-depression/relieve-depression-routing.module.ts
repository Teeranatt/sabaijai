import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelieveDepressionPage } from './relieve-depression.page';

const routes: Routes = [
  {
    path: '',
    component: RelieveDepressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelieveDepressionPageRoutingModule {}
