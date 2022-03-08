import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressTestPageRoutingModule } from './stress-test-routing.module';

import { StressTestPage } from './stress-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressTestPageRoutingModule
  ],
  declarations: [StressTestPage]
})
export class StressTestPageModule {}
