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
  everythingList: any[] = [];
  showEverything=true;
  showIncomes=false;
  showExpenses=false;
  constructor(private menuCtrl: MenuController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {}


  ngOnInit() {
    this.getCurrentUserBalance();
    this.getIncomes();
    this.getExpenses();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }
  selectIncomes(){
    this.showIncomes=true;
    this.showExpenses=false;
    this.showEverything=false;
  }
  selectExpenses(){
    this.showIncomes=false;
    this.showExpenses=true;
    this.showEverything=false;
  }
  selectEverything(){
    this.showIncomes=false;
    this.showExpenses=false;
    this.showEverything=true;
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

  everythingListFunction(){
    this.everythingList = this.incomeList.concat(this.expenseList);
    console.log(this.everythingList);
  }
  getIncomes() {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        const incomesRef = this.afDB.list(`users/${user.uid}/income`);
        incomesRef.valueChanges().subscribe(
          (incomes: any[]) => {
            this.incomeList = incomes;
            console.log(this.incomeList);
            this.incomeList.sort((a, b) => (a.date < b.date) ? 1 : -1);
            this.everythingList= this.incomeList;

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
            this.expenseList.sort((a, b) => (a.date < b.date) ? 1 : -1);
            this.everythingList= this.everythingList.concat(this.expenseList);
            this.everythingList.sort((a, b) => (a.date < b.date) ? 1 : -1);
            console.log(this.everythingList);
          },
          (error) => {
            console.error('Error retrieving user expenses', error);
          }
        );
      }
    });


  }




}
