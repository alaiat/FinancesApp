import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settingsLog',
  templateUrl: 'settingsLog.page.html',
  styleUrls: ['settingsLog.page.scss']
})
export class SettingsLogPage {

  constructor(private menuCtrl: MenuController, private router:Router) {}
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  declare(){
    this.router.navigateByUrl('/category');
  }
}
