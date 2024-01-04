import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-simulacoes-e-tendencias',
  templateUrl: './simulacoes-e-tendencias.page.html',
  styleUrls: ['./simulacoes-e-tendencias.page.scss'],
})
export class SimulacoesETendenciasPage{

  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    /**
     * Open the menu by side
     * We can refer to the menu by side
     * here because only one "end" menu exists
     */
    this.menuCtrl.open('end');
  }
}
