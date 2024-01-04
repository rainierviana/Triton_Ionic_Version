import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustosEShowbackPage } from './custos-e-showback.page';

describe('CustosEShowbackPage', () => {
  let component: CustosEShowbackPage;
  let fixture: ComponentFixture<CustosEShowbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustosEShowbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
