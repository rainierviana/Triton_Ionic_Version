import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoPage } from './uso.page';

const routes: Routes = [
  {
    path: '',
    component: UsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoPageRoutingModule {}
