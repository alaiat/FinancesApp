import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navController: NavController, private menuCtrl: MenuController) {}

  // Función para navegar a otra página
  goToPage(pageName: string) {
    this.navController.navigateForward(pageName);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
