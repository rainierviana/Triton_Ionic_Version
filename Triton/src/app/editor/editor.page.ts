import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage {
  appTitle: string = '';
  headerImage: string | null | undefined = null;
  footerText: string = '';
  selectedLanguage: string = '';

  public colors: any = {
    backgroundColor: '',
    toolbarBackground: '',
    buttonColor: '',
    tableBackground: '',
    textColor: '',
    contentTableText: '',
    navbuttons: '',
    darkModeBackground: '',
    darkModeToolbar: '',
    darkModeButtonColor: '',
    darkModeTableBackground: '',
    darkModeTextColor: '',
    darkModeContentTableText: '',
    darkModeNavbuttons: '',
  };

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.initializeColors();
  }

  initializeColors() {
    const root = document.documentElement;

    this.colors.backgroundColor = getComputedStyle(root)
      .getPropertyValue('--ion-background-color')
      .trim();
    this.colors.toolbarBackground = getComputedStyle(root)
      .getPropertyValue('--ion-toolbar-background')
      .trim();
    this.colors.buttonColor = getComputedStyle(root)
      .getPropertyValue('--ion-button-color')
      .trim();
    this.colors.tableBackground = getComputedStyle(root)
      .getPropertyValue('--table-background')
      .trim();
    this.colors.textColor = getComputedStyle(root)
      .getPropertyValue('--text-color')
      .trim();
    this.colors.contentTableText = getComputedStyle(root)
      .getPropertyValue('--content-table-text')
      .trim();
    this.colors.navbuttons = getComputedStyle(root)
      .getPropertyValue('--navbuttons')
      .trim();

    this.colors.darkModeBackground = getComputedStyle(root)
      .getPropertyValue('--ion-background-color')
      .trim();
    this.colors.darkModeToolbar = getComputedStyle(root)
      .getPropertyValue('--ion-toolbar-background')
      .trim();
    this.colors.darkModeButtonColor = getComputedStyle(root)
      .getPropertyValue('--ion-button-color')
      .trim();
    this.colors.darkModeTableBackground = getComputedStyle(root)
      .getPropertyValue('--table-background')
      .trim();
    this.colors.darkModeTextColor = getComputedStyle(root)
      .getPropertyValue('--text-color')
      .trim();
    this.colors.darkModeContentTableText = getComputedStyle(root)
      .getPropertyValue('--content-table-text')
      .trim();
    this.colors.darkModeNavbuttons = getComputedStyle(root)
      .getPropertyValue('--navbuttons')
      .trim();
  }

  // Method to update the color and save to localStorage
  updateColor(variableName: string, event: Event) {
    const colorValue = (event.target as HTMLInputElement).value;
    const root = document.documentElement;
    root.style.setProperty(variableName, colorValue);
    this.saveColorSetting(variableName, colorValue);
  }

  toggleDarkMode(event: any) {
    const isDarkMode = event.detail.checked;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  // Save color setting to localStorage
  saveColorSetting(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // Apply stored settings from localStorage on initialization
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

    const tablebackground = localStorage.getItem('--table-background');
    if (tablebackground) {
      root.style.setProperty('--table-background', tablebackground);
    }

    const text = localStorage.getItem('--text-color');
    if (text) {
      root.style.setProperty('--text-color', text);
    }

    const tabletext = localStorage.getItem('--content-table-text');
    if (tabletext) {
      root.style.setProperty('--content-table-text', tabletext);
    }

    const navbuttons = localStorage.getItem('--navbuttons');
    if (navbuttons) {
      root.style.setProperty('--navbuttons', navbuttons);
    }
  }

  ngOnInit() {
    this.applyStoredSettings();
  }
}
