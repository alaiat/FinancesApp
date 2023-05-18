import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulbTipsPage } from './bulb-tips.page';

describe('BulbTipsPage', () => {
  let component: BulbTipsPage;
  let fixture: ComponentFixture<BulbTipsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulbTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
