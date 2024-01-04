import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceadorDinamicoPage } from './balanceador-dinamico.page';

describe('BalanceadorDinamicoPage', () => {
  let component: BalanceadorDinamicoPage;
  let fixture: ComponentFixture<BalanceadorDinamicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalanceadorDinamicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
