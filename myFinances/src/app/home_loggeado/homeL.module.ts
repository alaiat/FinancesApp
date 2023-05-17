import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeLog } from './homeLog.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CategorySelectComponent } from '../category-select/category-select.component'
import { HomeLogPageRoutingModule } from './homeLog-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeLogPageRoutingModule
  ],
  declarations: [HomeLog, CategorySelectComponent]
})
export class HomeLogPageModule {}
