import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelievePageRoutingModule } from './relieve-routing.module';

import { RelievePage } from './relieve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelievePageRoutingModule
  ],
  declarations: [RelievePage]
})
export class RelievePageModule {}
