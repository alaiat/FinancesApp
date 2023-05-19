import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseCheckPage } from './expense-check.page';

describe('ExpenseCheckPage', () => {
  let component: ExpenseCheckPage;
  let fixture: ComponentFixture<ExpenseCheckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpenseCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
