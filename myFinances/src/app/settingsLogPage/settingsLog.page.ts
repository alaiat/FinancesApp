import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-settingsLog',
  templateUrl: 'settingsLog.page.html',
  styleUrls: ['settingsLog.page.scss']
})
export class SettingsLogPage implements OnInit{
  currentBalance!: number;
  balanceColor: string = '';
  constructor(private menuCtrl: MenuController, private router:Router, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.getCurrentUserBalance();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  declare(){
    this.router.navigateByUrl('/category');
  }

  getCurrentUserBalance() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const balanceRef = this.afDB.object<number | null>(`users/${user.uid}/balance`);
        balanceRef.valueChanges().subscribe(
          (balance: number | null) => {
            if (balance !== null) {
              this.currentBalance = balance;
              this.balanceColor = this.currentBalance < 0 ? 'red' : '';
            } else {
              this.currentBalance = 0; // O cualquier otro valor predeterminado
            }
          },
          (error) => {
            console.error('Error retrieving user balance', error);
          }
        );
      }
    });
  }
}
