import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestHistoryPageRoutingModule } from './test-history-routing.module';

import { TestHistoryPage } from './test-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestHistoryPageRoutingModule
  ],
  declarations: [TestHistoryPage]
})
export class TestHistoryPageModule {}
