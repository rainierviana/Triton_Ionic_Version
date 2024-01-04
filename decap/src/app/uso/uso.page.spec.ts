import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoPage } from './uso.page';

describe('UsoPage', () => {
  let component: UsoPage;
  let fixture: ComponentFixture<UsoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
