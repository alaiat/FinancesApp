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
  balanceColor: string = '';
  incomeList: any[] = [];
  expenseList: any[] = [];
  constructor(private menuCtrl: MenuController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {}


  ngOnInit() {
    this.getCurrentUserBalance();
    this.getIncomes();
    this.getExpenses();
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
  getIncomes() {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        const incomesRef = this.afDB.list(`users/${user.uid}/income`);
        incomesRef.valueChanges().subscribe(
          (incomes: any[]) => {
            this.incomeList = incomes;
            console.log(this.incomeList);
          },
          (error) => {
            console.error('Error retrieving user incomes', error);
          }
        );
      }
    });


  }
  getExpenses() {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        const expenseRef = this.afDB.list(`users/${user.uid}/expenses`);
        expenseRef.valueChanges().subscribe(
          (incomes: any[]) => {
            this.expenseList = incomes;
            console.log(this.expenseList);
          },
          (error) => {
            console.error('Error retrieving user expenses', error);
          }
        );
      }
    });


  }




}
