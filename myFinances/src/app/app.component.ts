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

  register() {
    this.router.navigateByUrl('/register');
    this.menuController.close();
  }

  login() {
    this.router.navigateByUrl('/login');
    this.menuController.close();
  }
}

