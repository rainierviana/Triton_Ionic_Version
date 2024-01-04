import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustosEShowbackPage } from './custos-e-showback.page';

const routes: Routes = [
  {
    path: '',
    component: CustosEShowbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustosEShowbackPageRoutingModule {}
