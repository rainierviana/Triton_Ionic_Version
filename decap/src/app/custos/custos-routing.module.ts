import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustosPage } from './custos.page';

const routes: Routes = [
  {
    path: '',
    component: CustosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustosPageRoutingModule {}
