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

  constructor(public http: HttpClient, private menuCtrl: MenuController) {}

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
          'status: ' +
            err.status +
            '<br />Status text: ' +
            err.statusText +
            '<br />Message: ' +
            err.message,
          'danger'
        );
      }
    );
  }

  FillContent(item: any) {
    this.mainContent.nativeElement.innerHTML = '';
    this.renderItem(item, this.mainContent.nativeElement);
  }

  renderItem(item: any, parentElement: HTMLElement) {

    const newContent = document.createElement('div');

    const link = document.createElement('a');
    link.style.textDecoration = 'none';
    link.style.color = 'rgb(0,79,159)';
    link.href = item.url;
    link.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;
    newContent.appendChild(link);
    newContent.appendChild(description);
    parentElement.appendChild(newContent);

    if (item.childrens && item.childrens.length > 0) {
      const childTable = document.createElement('table');
      item.childrens.forEach((subItem: any) => {
        console.log(JSON.stringify(subItem));
        const childRow = document.createElement('tr');
        const childCol1 = document.createElement('td');
        childCol1.textContent = subItem.title;
        const childCol2 = document.createElement('td');
        childCol2.textContent = subItem.description;

        childRow.appendChild(childCol1);
        childRow.appendChild(childCol2);
        childTable.appendChild(childRow);
      });
      
      parentElement.appendChild(childTable);
    }
  }
  
  openEndMenu() {
    this.menuCtrl.open('end');
  }
}