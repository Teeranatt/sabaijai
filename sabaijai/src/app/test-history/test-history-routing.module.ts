import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestHistoryPage } from './test-history.page';

const routes: Routes = [
  {
    path: '',
    component: TestHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestHistoryPageRoutingModule {}
