import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustosPage } from './custos.page';

describe('CustosPage', () => {
  let component: CustosPage;
  let fixture: ComponentFixture<CustosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
