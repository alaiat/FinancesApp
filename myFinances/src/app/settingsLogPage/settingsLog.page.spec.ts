import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsLogPage } from './settingsLog.page';

describe('SettingsLogPage', () => {
  let component: SettingsLogPage;
  let fixture: ComponentFixture<SettingsLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsLogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
