import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLDivElement>;
  public menuData: any[] = [];

  constructor(public http: HttpClient) { }

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
    console.log(JSON.stringify(item))
    this.mainContent.nativeElement.innerHTML = '';

    const newContent = document.createElement('p');
    newContent.textContent = item.title;
    this.mainContent.nativeElement.appendChild(newContent);

    const newTable = document.createElement('p');
    newTable.textContent = item.description;
    this.mainContent.nativeElement.appendChild(newTable);
  }
}
