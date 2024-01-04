import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceadorDinamicoPageRoutingModule } from './balanceador-dinamico-routing.module';

import { BalanceadorDinamicoPage } from './balanceador-dinamico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceadorDinamicoPageRoutingModule
  ],
  declarations: [BalanceadorDinamicoPage]
})
export class BalanceadorDinamicoPageModule {}
