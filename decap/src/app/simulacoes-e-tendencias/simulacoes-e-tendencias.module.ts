import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulacoesETendenciasPageRoutingModule } from './simulacoes-e-tendencias-routing.module';

import { SimulacoesETendenciasPage } from './simulacoes-e-tendencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulacoesETendenciasPageRoutingModule
  ],
  declarations: [SimulacoesETendenciasPage]
})
export class SimulacoesETendenciasPageModule {}
