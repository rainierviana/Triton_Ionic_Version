import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuData: any[] = [];
  menuitem: any;
  constructor(public http:HttpClient) {}
  ngOnInit() {
    this.Initialize();
    this.applyStoredSettings();   // Apply saved color settings on app initialization
    this.applyDarkModeSetting();  // Apply saved dark mode setting on app initialization
  }

  Initialize() {
    this.http.get('assets/data/menumodel.json').subscribe((data:any) => {
      this.menuData = data;
    },
    err => {
      console.log('status: '+ err.status + '<br />Status text: ' + err.statusText + '<br />Message: ' + err.message, 'danger');
    });
  }

  FillContent(item:any) {
    console.log(JSON.stringify('item'))
  }

  applyStoredSettings() {
    const root = document.documentElement;

    const backgroundColor = localStorage.getItem('--ion-background-color');
    if (backgroundColor) {
      root.style.setProperty('--ion-background-color', backgroundColor);
    }

    const toolbarColor = localStorage.getItem('--ion-toolbar-background');
    if (toolbarColor) {
      root.style.setProperty('--ion-toolbar-background', toolbarColor);
    }

    const buttonColor = localStorage.getItem('--ion-button-color');
    if (buttonColor) {
      root.style.setProperty('--ion-button-color', buttonColor);
    }

    const tableBackgroundColor = localStorage.getItem('--table-background');
    if (tableBackgroundColor) {
      root.style.setProperty('--table-background', tableBackgroundColor);
    }

    const textColor = localStorage.getItem('--text-color');
    if (textColor) {
      root.style.setProperty('--text-color', textColor);
    }

    const contentTableTextColor = localStorage.getItem('--content-table-text');
    if (contentTableTextColor) {
      root.style.setProperty('--content-table-text', contentTableTextColor);
    }

    const navButtonsColor = localStorage.getItem('--navbuttons');
    if (navButtonsColor) {
      root.style.setProperty('--navbuttons', navButtonsColor);
    }
  }

  // Apply dark mode setting from localStorage
  applyDarkModeSetting() {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}

