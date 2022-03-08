import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepressiontestPageRoutingModule } from './depressiontest-routing.module';

import { DepressiontestPage } from './depressiontest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepressiontestPageRoutingModule
  ],
  declarations: [DepressiontestPage]
})
export class DepressiontestPageModule {}
