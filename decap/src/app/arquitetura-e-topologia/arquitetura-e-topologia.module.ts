import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArquiteturaETopologiaPageRoutingModule } from './arquitetura-e-topologia-routing.module';

import { ArquiteturaETopologiaPage } from './arquitetura-e-topologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArquiteturaETopologiaPageRoutingModule
  ],
  declarations: [ArquiteturaETopologiaPage]
})
export class ArquiteturaETopologiaPageModule {}
