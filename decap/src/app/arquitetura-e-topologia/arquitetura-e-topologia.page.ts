import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-arquitetura-e-topologia',
  templateUrl: './arquitetura-e-topologia.page.html',
  styleUrls: ['./arquitetura-e-topologia.page.scss'],
})
export class ArquiteturaETopologiaPage {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
 
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
  
    this.menuCtrl.open('end');
  }
}
