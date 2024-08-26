import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Filesystem, Directory, FilesystemEncoding } from '@capacitor/filesystem';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage {
  appTitle: string = '';
  headerImage: string | null | undefined = null;
  footerText: string = '';
  selectedLanguage: string = 'en';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadAppConfig();
  }

  loadAppConfig() {
    this.http.get('assets/data/appconfig.json').subscribe((config: any) => {
      this.appTitle = config.appTitle || '';
      this.footerText = config.footerText || '';
      this.selectedLanguage = config.defaultLanguage || 'en';
      this.headerImage = config.headerImage || null;
    });
  }

  async saveConfig() {
    const config = {
      appTitle: this.appTitle,
      footerText: this.footerText,
      defaultLanguage: this.selectedLanguage,
      headerImage: this.headerImage
    };

    const configData = JSON.stringify(config);

    await Filesystem.writeFile({
      path: 'data/appconfig.json',
      data: configData,
      directory: Directory.Data,
      encoding: FilesystemEncoding.UTF8
    });

    alert('Configuration saved successfully!');
  }

  async selectImage() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      quality: 90,
      allowEditing: false,
      source: CameraSource.Photos
    });

    this.headerImage = image.dataUrl;
  }

  getSafeUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
