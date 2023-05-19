import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { get } from 'http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expense-check',
  templateUrl: './expense-check.page.html',
  styleUrls: ['./expense-check.page.scss'],
})
export class ExpenseCheckPage implements OnInit {

  expenseList: any[] = [];
  categoryList: any[] = [];

  constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
    this.getExpenses();
    this.getCategories();
  }

  getExpenses() {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        const expenseRef = this.afDB.list(`users/${user.uid}/expenses`);
        expenseRef.valueChanges().subscribe(
          (incomes: any[]) => {
            this.expenseList = incomes;
          },
          (error) => {
            console.error('Error retrieving user expenses', error);
          }
        );
      }
    });
  }
  getCategories() {
    this.afAuth.authState.subscribe((user) => {
      if(user){
        const categoryRef = this.afDB.list(`users/${user.uid}/categories`);
        categoryRef.valueChanges().subscribe(
          (categories: any[]) => {
            this.categoryList = categories;
          },
          (error) => {
            console.error('Error retrieving user categories', error);
          }
        );
      }
    });
  }
  getExpenseAmount(categoryId: string) {
    let total = 0;
    this.expenseList.forEach((expense) => {
      if(expense.category === categoryId){
        total += parseInt(expense.quantity);
      }
    });
    console.log(total);
    return total;
  }
  showExpenses(){
    this.router.navigateByUrl('../tabs/goals_loggeado');
  }
  showLimitPage(){
  }

}
