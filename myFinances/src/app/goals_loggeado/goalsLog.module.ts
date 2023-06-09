import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoalsLogPage } from './goalsLog.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CategorySelectHiruComponent } from '../category-select-hiru/category-select-hiru.component';
import { GoalsLogPageRoutingModule } from './goalsLog-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GoalsLogPageRoutingModule
  ],
  declarations: [GoalsLogPage, CategorySelectHiruComponent]
})
export class GoalsLogPageModule {}
