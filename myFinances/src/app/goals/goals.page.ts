import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss']
})
export class GoalsPage {

  constructor(private menuCtrl: MenuController) {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  redirect(){
    window.location.href = "/login";
  }
}
