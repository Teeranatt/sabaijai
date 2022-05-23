import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelieveDepressionPageRoutingModule } from './relieve-depression-routing.module';

import { RelieveDepressionPage } from './relieve-depression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelieveDepressionPageRoutingModule
  ],
  declarations: [RelieveDepressionPage]
})
export class RelieveDepressionPageModule {}
