import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  amount!: number;
  fromCurrency: string = '';
  toCurrency: string = '';
  convertedAmount!: number;
  constructor(private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }

  convert() {
    const conversionRates: { [key: string]: { [key: string]: number } } = {
      USD: { EUR: 0.92, GBP: 0.80, USD: 1, JPY: 136.95, CHF: 0.899, CNY: 6.99, ARS: 230.86, CLP: 789.338, COP: 4507.53, MXN: 17.46, PLN: 4.131, CAD: 1346, CZK: 21.74, DKK: 6.845, ISK: 138.531, NOK: 10.6589, SEK: 10.37},
      EUR: { USD: 1.08, GBP: 0.869, EUR: 1, JPY: 148.3, CHF: 0.9735, CNY: 7.57, ARS: 251.05, CLP: 858.37, COP: 4901.75, MXN: 18.99, PLN: 4.493, CAD: 1.464, CZK: 23.64, DKK: 7.446, ISK: 150.647, NOK: 11.594, SEK: 11.28},
      GBP: { USD: 1.245, EUR: 1.149, GBP: 1, JPY: 170.54, CHF: 1.119, CNY: 8.71, ARS: 289.35, CLP: 989.79, COP: 5654.53, MXN: 21.93, PLN: 5.189, CAD: 1.691, CZK: 27.31, DKK: 8.598, ISK: 173.9, NOK: 13.4, SEK: 13.04},
      JPY: { USD: 0.0073, EUR: 0.0067, GBP: 0.0059, JPY: 1, CHF: 0.0082, CNY: 0.064, ARS: 1.69, CLP: 5.79, COP: 33.10, MXN: 0.128, PLN: 0.03, CAD: 0.00989, CZK: 0.15969, DKK: 0.05028, ISK: 1.01753, NOK: 0.07829, SEK: 0.07619},
      CHF: { USD: 1.11, EUR: 1.03, GBP: 0.89, JPY: 152.2, CHF: 1, CNY: 7.78, ARS: 258.3, CLP: 883.9, COP: 5052.5, MXN: 19.6, PLN: 4.64, CAD: 1.51, CZK: 24.4, DKK: 7.68, ISK: 155.4, NOK: 11.98, SEK: 11.66},
      CNY: { USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 19.6, CHF: 0.13, CNY: 1, ARS: 33.2, CLP: 113.6, COP: 650.3, MXN: 2.52, PLN: 0.60, CAD: 0.20, CZK: 3.2, DKK: 1.01, ISK: 20.4, NOK: 1.57, SEK: 1.53},
      ARS: { USD: 0.0043, EUR: 0.0039, GBP: 0.0035, JPY: 0.59, CHF: 0.0039, CNY: 0.030, ARS: 1, CLP: 3.42, COP: 19.58, MXN: 0.076, PLN: 0.018, CAD: 0.0059, CZK: 0.095, DKK: 0.030, ISK: 0.61, NOK: 0.047, SEK: 0.046},
      CLP: { USD: 0.0013, EUR: 0.0012, GBP: 0.0010, JPY: 0.17, CHF: 0.0011, CNY: 0.0088, ARS: 0.29, CLP: 1, COP: 5.73, MXN: 0.022, PLN: 0.0052, CAD: 0.0017, CZK: 0.027, DKK: 0.0085, ISK: 0.17, NOK: 0.013, SEK: 0.013},
      COP: { USD: 0.00022, EUR: 0.00020, GBP: 0.00017, JPY: 0.029, CHF: 0.00019, CNY: 0.0015, ARS: 0.049, CLP: 0.17, COP: 1, MXN: 0.0039, PLN: 0.00093, CAD: 0.00030, CZK: 0.0048, DKK: 0.0015, ISK: 0.030, NOK: 0.0023, SEK: 0.0022},
      MXN: { USD: 0.057, EUR: 0.052, GBP: 0.045, JPY: 7.76, CHF: 0.051, CNY: 0.40, ARS: 13.3, CLP: 45.5, COP: 260.3, MXN: 1, PLN: 0.24, CAD: 0.078, CZK: 1.26, DKK: 0.40, ISK: 8.1, NOK: 0.62, SEK: 0.60},
      PLN: { USD: 0.24, EUR: 0.22, GBP: 0.19, JPY: 32.6, CHF: 0.21, CNY: 1.63, ARS: 54.1, CLP: 185.2, COP: 1060.3, MXN: 4.11, PLN: 1, CAD: 0.33, CZK: 5.3, DKK: 1.67, ISK: 33.8, NOK: 2.60, SEK: 2.53},
      CAD: { USD: 0.74, EUR: 0.68, GBP: 0.59, JPY: 101.2, CHF: 0.66, CNY: 5.14, ARS: 170.7, CLP: 583.9, COP: 3342.5, MXN: 12.96, PLN: 3.07, CAD: 1, CZK: 16.1, DKK: 5.08, ISK: 102.8, NOK: 7.92, SEK: 7.71},
      CZK: { USD: 0.046, EUR: 0.042, GBP: 0.036, JPY: 6.2, CHF: 0.041, CNY: 0.32, ARS: 10.6, CLP: 36.3, COP: 207.9, MXN: 0.81, PLN: 0.19, CAD: 0.062, CZK: 1, DKK: 0.32, ISK: 6.5, NOK: 0.50, SEK: 0.49},
      DKK: { USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 19.6, CHF: 0.13, CNY: 1, ARS: 33.2, CLP: 113.6, COP: 650.3, MXN: 2.52, PLN: 0.60, CAD: 0.20, CZK: 3.2, DKK: 1, ISK: 20.4, NOK: 1.57, SEK: 1.53},
      ISK: { USD: 0.0073, EUR: 0.0067, GBP: 0.0059, JPY: 1, CHF: 0.0082, CNY: 0.064, ARS: 1.69, CLP: 5.79, COP: 33.10, MXN: 0.128, PLN: 0.03, CAD: 0.00989, CZK: 0.15969, DKK: 0.05028, ISK: 1, NOK: 0.07829, SEK: 0.07619},
      NOK: { USD: 0.086, EUR: 0.079, GBP: 0.069, JPY: 11.8, CHF: 0.077, CNY: 0.60, ARS: 19.9, CLP: 68.2, COP: 390.3, MXN: 1.51, PLN: 0.36, CAD: 0.12, CZK: 1.9, DKK: 0.60, ISK: 12.2, NOK: 1, SEK: 0.97},
      SEK: { USD: 0.096, EUR: 0.088, GBP: 0.076, JPY: 13.1, CHF: 0.086, CNY: 0.67, ARS: 22.2, CLP: 76.1, COP: 435.7, MXN: 1.69, PLN: 0.40, CAD: 0.13, CZK: 2.1, DKK: 0.67, ISK: 13.6, NOK: 1.05, SEK: 1}
    };
  
    const conversionRate = conversionRates[this.fromCurrency][this.toCurrency];
    this.convertedAmount = this.amount * conversionRate;
  }

  ionViewDidEnter() {
    this.amount = 0;
    this.fromCurrency = '';
    this.toCurrency = '';
    this.convertedAmount = 0;
  }
}
