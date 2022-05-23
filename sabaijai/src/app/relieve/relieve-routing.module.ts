import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelievePage } from './relieve.page';

const routes: Routes = [
  {
    path: '',
    component: RelievePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelievePageRoutingModule {}
