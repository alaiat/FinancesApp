import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsLogPage } from './settingsLog.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsLogPageRoutingModule } from './settingsLog-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SettingsLogPageRoutingModule
  ],
  declarations: [SettingsLogPage]
})
export class SettingsLogPageModule {}
