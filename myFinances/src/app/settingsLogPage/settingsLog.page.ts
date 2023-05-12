import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settingsLog',
  templateUrl: 'settingsLog.page.html',
  styleUrls: ['settingsLog.page.scss']
})
export class SettingsLogPage {

  constructor(private menuCtrl: MenuController) {}
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
