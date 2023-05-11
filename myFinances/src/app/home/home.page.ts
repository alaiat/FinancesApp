import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private navController: NavController, private menuCtrl: MenuController) {}

  // Función para navegar a otra página
  goToPage(pageName: string) {
    this.navController.navigateForward(pageName);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
