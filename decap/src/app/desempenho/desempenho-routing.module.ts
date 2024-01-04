import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesempenhoPage } from './desempenho.page';

const routes: Routes = [
  {
    path: '',
    component: DesempenhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesempenhoPageRoutingModule {}
