import { Component, OnInit} from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-goalsLog',
  templateUrl: 'goalsLog.page.html',
  styleUrls: ['goalsLog.page.scss']
})
export class GoalsLogPage implements OnInit{
  currentBalance!: number;
  constructor(private menuCtrl: MenuController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.getCurrentUserBalance();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  getCurrentUserBalance() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const balanceRef = this.afDB.object<number | null>(`users/${user.uid}/balance`);
        balanceRef.valueChanges().subscribe(
          (balance: number | null) => {
            if (balance !== null) {
              this.currentBalance = balance;
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
