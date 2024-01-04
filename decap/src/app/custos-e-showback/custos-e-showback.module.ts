import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustosEShowbackPageRoutingModule } from './custos-e-showback-routing.module';

import { CustosEShowbackPage } from './custos-e-showback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustosEShowbackPageRoutingModule
  ],
  declarations: [CustosEShowbackPage]
})
export class CustosEShowbackPageModule {}
