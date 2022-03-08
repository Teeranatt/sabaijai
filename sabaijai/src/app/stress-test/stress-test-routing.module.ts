import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StressTestPage } from './stress-test.page';

const routes: Routes = [
  {
    path: '',
    component: StressTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressTestPageRoutingModule {}
