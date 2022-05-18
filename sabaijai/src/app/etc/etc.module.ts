import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtcPageRoutingModule } from './etc-routing.module';

import { EtcPage } from './etc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtcPageRoutingModule
  ],
  declarations: [EtcPage]
})
export class EtcPageModule {}
