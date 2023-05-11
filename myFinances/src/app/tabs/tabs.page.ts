import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.isLoggedIn = this.authService.getIsLoggedIn();
    console.log("tabs constructor: " + this.isLoggedIn);
  }
  ionTabsWillChange(event: any) {
    console.log("tabs will change: " + event.tab);
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }

}
