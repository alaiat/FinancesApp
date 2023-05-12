import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-goalsLog',
  templateUrl: 'goalsLog.page.html',
  styleUrls: ['goalsLog.page.scss']
})
export class GoalsLogPage {

  constructor(private menuCtrl: MenuController) {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
