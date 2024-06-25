import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLDivElement>;
  public menuData: any[] = [];

  constructor(public http: HttpClient, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.Initialize();
  }

  Initialize() {
    this.http.get('assets/data/menumodel.json').subscribe(
      (data: any) => {
        this.menuData = data;
      },
      (err) => {
        console.log(
          'status: ' + err.status + '<br />Status text: ' + err.statusText + '<br />Message: ' + err.message, 'danger'
        );
      }
    );
  }

  FillContent(item: any) {
    console.log(JSON.stringify(item))
    this.mainContent.nativeElement.innerHTML = '';

    const newContent = document.createElement('p');
    newContent.textContent = item.title;
    this.mainContent.nativeElement.appendChild(newContent);

    if (item.childrens && item.childrens.length > 0) {
      const childrensList = document.createElement('p');
      item.childrens.forEach((subItem: any) => {
        const listItem = document.createElement('p');
        listItem.textContent = subItem.title;
        childrensList.appendChild(listItem);
      });
      this.mainContent.nativeElement.appendChild(childrensList);
    }
  }

  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
