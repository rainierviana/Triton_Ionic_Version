import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoPageRoutingModule } from './uso-routing.module';

import { UsoPage } from './uso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoPageRoutingModule
  ],
  declarations: [UsoPage]
})
export class UsoPageModule {}
