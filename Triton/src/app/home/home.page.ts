import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public menuData: any[] = [];
menuitem: any;

  constructor(public http:HttpClient) {}

  ngOnInit() {
    this.Initialize();
  }

  Initialize() {
    this.http.get('assets/data/menumodel.json').subscribe((data:any) => {
      this.menuData = data;
    },
    err => {
      //this.showToast('status: '+ err.status + '<br />Status text: ' + err.statusText + '<br />Message: ' + err.message, 'danger');
      console.log('status: '+ err.status + '<br />Status text: ' + err.statusText + '<br />Message: ' + err.message, 'danger');
    });
  }

  FillContent(item:any) {
    console.log(JSON.stringify(item))
  }
}
