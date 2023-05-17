import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tipcalc',
  templateUrl: './tipcalc.page.html',
  styleUrls: ['./tipcalc.page.scss'],
})
export class TipcalcPage implements OnInit {
  billAmount!: number;
  tipPercentage!: number;
  constructor(private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }

  calculateTipAmount(): number {
    const tipAmount = this.billAmount * (this.tipPercentage / 100);
    return tipAmount;
  }

  calculateTotalAmount(): number {
    const totalAmount = this.billAmount + this.calculateTipAmount();
    return totalAmount;
  }

  ionViewDidEnter() {
    this.billAmount = 0;
    this.tipPercentage = 0;
  }
}
