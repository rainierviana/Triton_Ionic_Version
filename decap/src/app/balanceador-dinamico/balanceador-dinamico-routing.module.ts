import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceadorDinamicoPage } from './balanceador-dinamico.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceadorDinamicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceadorDinamicoPageRoutingModule {}
