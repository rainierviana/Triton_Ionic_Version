import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacidadePageRoutingModule } from './capacidade-routing.module';

import { CapacidadePage } from './capacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacidadePageRoutingModule
  ],
  declarations: [CapacidadePage]
})
export class CapacidadePageModule {}
