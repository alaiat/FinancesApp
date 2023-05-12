import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GoalsLogPage } from './goalsLog.page';

describe('GoalsPage', () => {
  let component: GoalsLogPage;
  let fixture: ComponentFixture<GoalsLogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsLogPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
