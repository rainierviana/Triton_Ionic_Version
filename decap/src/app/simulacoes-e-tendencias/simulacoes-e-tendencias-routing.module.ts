import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulacoesETendenciasPage } from './simulacoes-e-tendencias.page';

const routes: Routes = [
  {
    path: '',
    component: SimulacoesETendenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulacoesETendenciasPageRoutingModule {}
