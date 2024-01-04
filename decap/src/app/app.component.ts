import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private pickerCtrl: PickerController) {}

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'processos',
          options: [
            {
              text: 'Capacidade',
              value: 'capacidade',
            },
            {
              text: 'Custos',
              value: 'custos',
            },
            {
              text: 'Desempenho',
              value: 'desempenho',
            },
            {
              text: 'Uso',
              value: 'uso',
            },
            
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (value) => {
            window.alert(`Você selecionou ${value.processos.value}`);
          },
        },
      ],
    });

    await picker.present();
  }
}