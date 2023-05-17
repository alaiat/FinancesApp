import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipcalcPage } from './tipcalc.page';

describe('TipcalcPage', () => {
  let component: TipcalcPage;
  let fixture: ComponentFixture<TipcalcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipcalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
