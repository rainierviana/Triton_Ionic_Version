import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapacidadePage } from './capacidade.page';

describe('CapacidadePage', () => {
  let component: CapacidadePage;
  let fixture: ComponentFixture<CapacidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
