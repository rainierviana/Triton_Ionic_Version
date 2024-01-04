import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulacoesETendenciasPage } from './simulacoes-e-tendencias.page';

describe('SimulacoesETendenciasPage', () => {
  let component: SimulacoesETendenciasPage;
  let fixture: ComponentFixture<SimulacoesETendenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimulacoesETendenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
