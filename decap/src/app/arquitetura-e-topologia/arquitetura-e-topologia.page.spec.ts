import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArquiteturaETopologiaPage } from './arquitetura-e-topologia.page';

describe('ArquiteturaETopologiaPage', () => {
  let component: ArquiteturaETopologiaPage;
  let fixture: ComponentFixture<ArquiteturaETopologiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArquiteturaETopologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
