import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // References
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLDivElement>;

  // State Variables
  searchTerm: string = '';
  noItemsFound: boolean = false;
  darkMode = false;
  showBackButton: boolean = false;
  showForwardButton: boolean = false;
  showSearchBar: boolean = false;

  // Data Management
  public menuData: any[] = [];
  public filteredData: any[] = [];
  public filteredMenuData: any[] = [];

  // Navigation Management
  private navigationStack: any[] = [];
  private forwardStack: any[] = [];
  private initialMainContent: string = '';
  public breadcrumbs: string[] = [];

  // Action Sheet Options
  public actionSheetButtons = [
    { text: 'Português', data: { action: 'delete' } },
    { text: 'English', data: { action: 'share' } },
  ];

  constructor(public http: HttpClient, private menuCtrl: MenuController, private translate: TranslateService) {translate.setDefaultLang('pt');}

  toggleLanguage(language: string) {
    this.translate.use(language);
  }
  
  ngOnInit() {
    this.Initialize();
    this.setInitialLanguage();
    setTimeout(() => {
      this.initialMainContent = this.mainContent.nativeElement.innerHTML;
    }, 0);
  }

  setInitialLanguage() {
    // Retrieve the saved language from localStorage or default to Portuguese
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    this.translate.use(savedLanguage);
  }

  Initialize() {
    this.http.get('assets/data/menumodel.json').subscribe(
      (data: any) => {
        this.menuData = data;
        this.filteredMenuData = data; // Initialize filtered data
      },
      (err) => {
        console.error(
          `status: ${err.status}, Status text: ${err.statusText}, Message: ${err.message}`
        );
      }
    );
  }

  // Dark Mode Toggle
  toggleDarkMode(event: any) {
    this.darkMode = event.detail.checked;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

  handleLanguageChange(language: string) {
    // Save language preference
    localStorage.setItem('selectedLanguage', language);
    this.translate.use(language);
  }

  // search bar filtering functionality
  filterTable() {
    const searchInput = (
      document.getElementById('searchInput') as HTMLInputElement
    ).value.toLowerCase();
    const table = document.querySelector('table')!;
    const tr = table.getElementsByTagName('tr');
    let anyVisible = false;

    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        const hasUrl = tr[i].querySelector('a') !== null;
        if (txtValue.toLowerCase().indexOf(searchInput) > -1 && hasUrl) {
          tr[i].style.display = ''; // Show the row
          anyVisible = true;
        } else {
          tr[i].style.display = 'none'; // Hide the row
        }
      }
    }

    // If no rows are visible, show the error message
    this.noItemsFound = !anyVisible;
  }

  // Content Management
  FillContent(item: any) {
    this.showSearchBar = !item.url;

    this.navigationStack.push(item);
    this.forwardStack = [];
    this.mainContent.nativeElement.innerHTML = '';
    this.renderItem(item, this.mainContent.nativeElement);
    this.showBackButton = true;
    this.showForwardButton = false;
    this.breadcrumbs.push(item.title);

    const existingIndex = this.breadcrumbs.indexOf(item.title);
    if (existingIndex !== -1) {
      this.breadcrumbs = this.breadcrumbs.slice(0, existingIndex + 1);
      this.navigationStack = this.navigationStack.slice(0, existingIndex + 1);
    } else {
      this.breadcrumbs.push(item.title);
      this.navigationStack.push(item);
    }
  }

  renderItem(item: any, parentElement: HTMLElement) {
    const newContent = document.createElement('div');

    const title = document.createElement('p');
    title.textContent = item.title;
    title.style.margin = '0';
    title.style.paddingTop = '0.5em';
    title.style.paddingBottom = '1em';
    title.style.textDecoration = 'none';
    title.style.cursor = 'default';
    title.style.textAlign = 'left';
    title.style.fontFamily = 'Futura-Bold';

    newContent.appendChild(title);
    parentElement.appendChild(newContent);

    if (item.childrens && item.childrens.length > 0) {
      const childTable = document.createElement('table');
      childTable.style.borderRadius = '1em';
      childTable.style.width = '100%';
      childTable.style.color = 'var(--content-table-text)';
      childTable.style.transition = '0.2s';
      childTable.style.overflowY = 'auto';
      childTable.style.display = 'block';

      const tableHeight = window.innerHeight * 0.5;
      childTable.style.maxHeight = `${tableHeight}px`;

      const tableWrapper = document.createElement('div');
      tableWrapper.style.maxHeight = `${tableHeight}px`;
      tableWrapper.style.overflowY = 'auto';
      tableWrapper.style.overflowX = 'hidden';
      tableWrapper.style.display = 'block';
      tableWrapper.appendChild(childTable);

      item.childrens.forEach((subItem: any) => {
        const childRow = document.createElement('tr');

        const childCol1 = document.createElement('td');
        const childUrl = document.createElement('a');
        childUrl.href = subItem.url;
        childUrl.textContent = subItem.title;
        childUrl.style.textDecoration = 'none';
        childUrl.style.color = childTable.style.color;
        childUrl.style.textAlign = 'left';
        childCol1.style.textAlign = 'left';
        childCol1.style.paddingLeft = '1.5em';

        if (!subItem.url) {
          childUrl.style.cursor = 'pointer';
          childUrl.addEventListener('click', (event) => {
            event.preventDefault();
            this.FillContent(subItem);
          });
          childCol1.style.paddingBottom = '1em';
          childCol1.style.paddingTop = '1em';
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

      parentElement.appendChild(tableWrapper);
    }
  }

  handleItemClick(item: any) {
    if (item.url) {
      window.open(item.url, '_blank');
    } else if (item.childrens && item.childrens.length > 0) {
      this.FillContent(item);
    }
  }

  // Navigation Controls

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
      this.breadcrumbs = [];
      this.showBackButton = false;
      this.showSearchBar = false;
      this.showForwardButton = false; // Hide forward button
    }
  }
  

  goForward() {
    if (this.forwardStack.length > 0) {
      const nextItem = this.forwardStack.pop()!;
      this.navigationStack.push(nextItem);
      this.mainContent.nativeElement.innerHTML = '';
      this.renderItem(nextItem, this.mainContent.nativeElement);
      this.showBackButton = true;
      this.showForwardButton = this.forwardStack.length > 0;
      this.breadcrumbs.push(nextItem.title);
    }
  }

  homeButtonClicked() {
    this.mainContent.nativeElement.innerHTML = this.initialMainContent;
    this.navigationStack = [];
    this.forwardStack = [];
    this.showBackButton = false;
    this.showForwardButton = false;
    this.breadcrumbs = [];
    this.showSearchBar = false;
    this.noItemsFound = false;
    this.filteredData = [];
  }

  // Menu Controls
  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
