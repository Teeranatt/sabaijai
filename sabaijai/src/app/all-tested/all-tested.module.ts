import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTestedPageRoutingModule } from './all-tested-routing.module';

import { AllTestedPage } from './all-tested.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTestedPageRoutingModule
  ],
  declarations: [AllTestedPage]
})
export class AllTestedPageModule {}
