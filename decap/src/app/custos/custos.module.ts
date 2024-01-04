import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustosPageRoutingModule } from './custos-routing.module';

import { CustosPage } from './custos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustosPageRoutingModule
  ],
  declarations: [CustosPage]
})
export class CustosPageModule {}
