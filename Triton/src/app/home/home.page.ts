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
  private navigationStack: any[] = [];
  private forwardStack: any[] = []; // Stack to keep track of forward navigation
  showBackButton: boolean = false;
  showForwardButton: boolean = false; // Flag to control forward button visibility
  private initialMainContent: string = '';

  constructor(public http: HttpClient, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.Initialize();
    setTimeout(() => {
      this.initialMainContent = this.mainContent.nativeElement.innerHTML;
    }, 0);
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
    this.navigationStack.push(item); // Push the current item to the stack
    this.forwardStack = []; // Clear the forward stack when navigating to a new item
    this.mainContent.nativeElement.innerHTML = '';
    this.renderItem(item, this.mainContent.nativeElement);
    this.showBackButton = true;
    this.showForwardButton = false; // Hide forward button when navigating
  }

  renderItem(item: any, parentElement: HTMLElement) {
    const newContent = document.createElement('div');

    const link = document.createElement('p');
    link.textContent = item.title;
    link.style.textDecoration = 'none';
    link.style.cursor = 'pointer';
    link.style.textAlign = 'left';
    link.addEventListener('click', () => this.handleItemClick(item));

    const description = document.createElement('p');
    description.textContent = item.description;
    description.style.textAlign = 'left';
    newContent.appendChild(link);
    newContent.appendChild(description);
    parentElement.appendChild(newContent)

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
        childUrl.style.textAlign = 'left';
        childCol1.style.textAlign = 'left';

        if (!subItem.url) {
          childUrl.style.cursor = 'pointer';
          childUrl.addEventListener('click', (event) => {
            event.preventDefault();
            this.FillContent(subItem);
          });
        }

        childCol1.appendChild(childUrl);

        const childCol2 = document.createElement('td');
        childCol2.textContent = subItem.description;
        childCol2.style.padding = '1em';
        childCol2.style.cursor = 'default';
        childCol2.style.textAlign = 'left';

        childRow.appendChild(childCol1);
        childRow.appendChild(childCol2);
        childTable.appendChild(childRow);
      });

      parentElement.appendChild(childTable);
    }
  }

  handleItemClick(item: any) {
    if (item.url) {
      window.open(item.url, '_blank');
    } else if (item.childrens && item.childrens.length > 0) {
      this.FillContent(item);
    }
  }

  goBack() {
    if (this.navigationStack.length > 1) {
      this.forwardStack.push(this.navigationStack.pop()!); // Move the current item to the forward stack
      const previousItem = this.navigationStack[this.navigationStack.length - 1];
      this.mainContent.nativeElement.innerHTML = '';
      this.renderItem(previousItem, this.mainContent.nativeElement);
      this.showBackButton = this.navigationStack.length > 1; // Show back button if there's a history
      this.showBackButton = true;
      this.showForwardButton = true; // Show forward button
    } else {
      // If the navigation stack is empty or has only one item, show the initial content
      this.mainContent.nativeElement.innerHTML = this.initialMainContent;
      this.navigationStack = []; // Reset the navigation stack
      this.forwardStack = []; // Clear the forward stack
      this.showBackButton = false;
      this.showForwardButton = false; // Hide forward button
    }
  }

  goForward() {
    if (this.forwardStack.length > 0) {
      const nextItem = this.forwardStack.pop()!;
      this.navigationStack.push(nextItem); // Add the item back to the navigation stack
      this.mainContent.nativeElement.innerHTML = '';
      this.renderItem(nextItem, this.mainContent.nativeElement);
      this.showBackButton = true;
      this.showForwardButton = this.forwardStack.length > 0; // Show forward button if there's more history
    }
  }

  homeButtonClicked() {
    this.mainContent.nativeElement.innerHTML = this.initialMainContent;
    this.navigationStack = [];
    this.forwardStack = [];
    this.showBackButton = false;
    this.showForwardButton = false;
  }
  

  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
