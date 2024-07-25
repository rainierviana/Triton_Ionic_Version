  import { Component, ViewChild, ElementRef } from '@angular/core';
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
      this.mainContent.nativeElement.innerHTML = '';
      this.renderItem(item, this.mainContent.nativeElement);
    }

    renderItem(item: any, parentElement: HTMLElement) {
      const newContent = document.createElement('div');

      const link = document.createElement('p');
      link.textContent = item.title;
      link.style.textDecoration = 'none';
      link.style.cursor = 'default';

      const description = document.createElement('p');
      description.textContent = item.description;
      newContent.appendChild(link);
      newContent.appendChild(description);
      parentElement.appendChild(newContent);

      if (item.childrens && item.childrens.length > 0) {
        const childTable = document.createElement('table');
        childTable.style.backgroundColor = 'rgb(208,224,227)';
        childTable.style.borderRadius = '1em';
        childTable.style.width = '100%';
        item.childrens.forEach((subItem: any) => {
          const childRow = document.createElement('tr');

          const childCol1 = document.createElement('td');
          const childUrl = document.createElement('a');
          childUrl.href = subItem.url;
          childUrl.textContent = subItem.title;
          childUrl.style.textDecoration = 'none';
          childUrl.style.color = 'rgb(0,79,159)';
          childCol1.appendChild(childUrl);

          const childCol2 = document.createElement('td');
          childCol2.textContent = subItem.description;
          childCol2.style.padding = '1em';
          childCol2.style.cursor = 'default';

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
