import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardsPage } from './dashboards.page';

describe('DashboardsPage', () => {
  let component: DashboardsPage;
  let fixture: ComponentFixture<DashboardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
