import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }
}
