import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menuController: MenuController, private router: Router) {}

  currency() {
    this.router.navigateByUrl('/currency');
    this.menuController.close();
  }

  tipCalc() {
    this.router.navigateByUrl('/tipcalc');
    this.menuController.close();
  }

  profile(){
    this.router.navigateByUrl('/profile');
    this.menuController.close();
  }
}

