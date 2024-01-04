import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesempenhoPageRoutingModule } from './desempenho-routing.module';

import { DesempenhoPage } from './desempenho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesempenhoPageRoutingModule
  ],
  declarations: [DesempenhoPage]
})
export class DesempenhoPageModule {}
