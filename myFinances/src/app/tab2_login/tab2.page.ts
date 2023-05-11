import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2_login',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Login {

  constructor(private menuCtrl: MenuController) {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
