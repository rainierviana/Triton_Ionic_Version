import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquiteturaETopologiaPage } from './arquitetura-e-topologia.page';

const routes: Routes = [
  {
    path: '',
    component: ArquiteturaETopologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArquiteturaETopologiaPageRoutingModule {}
