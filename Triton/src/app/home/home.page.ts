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
    this.renderMainItem(item, this.mainContent.nativeElement);
  }

  renderMainItem(item: any, parentElement: HTMLElement) {
    const newContent = document.createElement('div');

    const link = document.createElement('p');
    link.textContent = item.title;
    link.style.textDecoration = 'none';
    link.style.cursor = 'default';
    link.style.textAlign = 'left';

    const description = document.createElement('p');
    description.textContent = item.description;
    description.style.textAlign = 'left';
    newContent.appendChild(link);
    newContent.appendChild(description);
    parentElement.appendChild(newContent);

    if (item.childrens && item.childrens.length > 0) {
      const childTable = document.createElement('table');
      childTable.style.backgroundColor = 'rgb(208,224,227)';
      childTable.style.borderRadius = '1em';
      childTable.style.width = '100%';

      item.childrens.forEach((subItem: any) => {
        this.renderChildItem(subItem, childTable);
      });

      parentElement.appendChild(childTable);
    }
  }

  renderChildItem(subItem: any, parentElement: HTMLElement) {
    const childRow = document.createElement('tr');
    const childCol1 = document.createElement('td');

    if (subItem.url) {
      // Render as a clickable link
      const childUrl = document.createElement('a');
      childUrl.href = subItem.url;
      childUrl.textContent = subItem.title;
      childUrl.style.textDecoration = 'none';
      childUrl.style.color = 'rgb(0,79,159)';
      childUrl.style.textAlign = 'left';
      childCol1.style.marginLeft = '2em';
      childCol1.style.textAlign = 'center';
      childCol1.appendChild(childUrl);
    } else {
      // Render as a dropdown
      const dropdown = document.createElement('div');
      const dropdownTitle = document.createElement('p');
      dropdownTitle.textContent = subItem.title;
      dropdownTitle.style.cursor = 'pointer';
      dropdownTitle.style.textAlign = 'left';
      dropdownTitle.style.color = 'rgb(0,79,159)';
      dropdownTitle.addEventListener('click', () => {
        childTable.style.display = childTable.style.display === 'none' ? 'table' : 'none';
      });

      const childTable = document.createElement('table');
      childTable.style.backgroundColor = 'rgb(208,224,227)';
      childTable.style.borderRadius = '1em';
      childTable.style.width = '100%';
      childTable.style.display = 'none'; // Initially hidden

      if (subItem.childrens && subItem.childrens.length > 0) {
        subItem.childrens.forEach((child: any) => {
          this.renderGrandChildItem(child, childTable);
        });
      }

      childCol1.appendChild(dropdownTitle);
      childRow.appendChild(childCol1);
      parentElement.appendChild(childRow);
      parentElement.appendChild(childTable);
    }

    const childCol2 = document.createElement('td');
    childCol2.textContent = subItem.description;
    childCol2.style.padding = '1em';
    childCol2.style.cursor = 'default';
    childCol2.style.textAlign = 'left';

    childRow.appendChild(childCol2);

    if (subItem.url) {
      parentElement.appendChild(childRow);
    }
  }

  renderGrandChildItem(grandChild: any, parentElement: HTMLElement) {
    const grandChildRow = document.createElement('tr');

    const grandChildCol1 = document.createElement('td');
    const grandChildUrl = document.createElement('a');
    grandChildUrl.href = grandChild.url;
    grandChildUrl.textContent = grandChild.title;
    grandChildUrl.style.textDecoration = 'none';
    grandChildUrl.style.color = 'rgb(0,79,159)';
    grandChildUrl.style.textAlign = 'left';
    grandChildCol1.style.marginLeft = '2em';
    grandChildCol1.style.textAlign = 'center';
    grandChildCol1.appendChild(grandChildUrl);

    const grandChildCol2 = document.createElement('td');
    grandChildCol2.textContent = grandChild.description;
    grandChildCol2.style.padding = '1em';
    grandChildCol2.style.cursor = 'default';
    grandChildCol2.style.textAlign = 'left';

    grandChildRow.appendChild(grandChildCol1);
    grandChildRow.appendChild(grandChildCol2);

    parentElement.appendChild(grandChildRow);
  }

  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
