import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacidadePage } from './capacidade.page';

const routes: Routes = [
  {
    path: '',
    component: CapacidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacidadePageRoutingModule {}
