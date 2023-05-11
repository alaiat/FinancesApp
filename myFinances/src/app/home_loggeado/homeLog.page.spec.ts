import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomeLog } from './homeLog.page';

describe('HomeLog', () => {
  let component: HomeLog;
  let fixture: ComponentFixture<HomeLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLog],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
