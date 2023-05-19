import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveCategoryPage } from './remove-category.page';

describe('RemoveCategoryPage', () => {
  let component: RemoveCategoryPage;
  let fixture: ComponentFixture<RemoveCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemoveCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
