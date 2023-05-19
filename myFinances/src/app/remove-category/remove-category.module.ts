import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveCategoryPageRoutingModule } from './remove-category-routing.module';

import { RemoveCategoryPage } from './remove-category.page';

import {CategorySelectLauComponent} from '../category-select-lau/category-select-lau.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveCategoryPageRoutingModule
  ],
  declarations: [RemoveCategoryPage, CategorySelectLauComponent]
})
export class RemoveCategoryPageModule {}
