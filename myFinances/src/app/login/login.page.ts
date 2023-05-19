import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private router:Router, private authService: AuthService, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  checkLog() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Navigate to the home page
        console.log('Logged in!');
        this.clearMonthExpenses();  
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('/tabs/home_loggeado');
      })
      .catch((error) => {
        // Handle login error
        alert("The email or password you entered is incorrect.");
      });

  }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home');
  }

  async clearMonthExpenses(){
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const userRef = this.afDB.object<any>(`users/${currentUser.uid}`);
        userRef.valueChanges().pipe(take(1)).subscribe((userData) => {
          const lastExpenseClearDate = userData.lastExpenseClearDate;
          console.log(`Last Expense Clear Date: ${lastExpenseClearDate}`);
          let month = lastExpenseClearDate.split('-')[1];
          let year = lastExpenseClearDate.split('-')[0];
          console.log(`Month: ${month}`);
          let actualMonth = new Date().getMonth()+1;
          let actualYear = new Date().getFullYear();
          console.log(`Actual Month: ${actualMonth}`);
          
          if(parseInt(month) == 12){
            if(actualMonth < 12){
              const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
              categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
              snapshot.forEach((categorySnapshot) => {
                const categoryKey = categorySnapshot.key;
                if (categoryKey) { // Verificar que categoryKey no sea null
                const categoryData = categorySnapshot.payload.val() as { monthSpent: number };
                categoryData.monthSpent = 0;
                categoriesRef.update(categoryKey, categoryData).then(() => {
                }).catch((error) => {
                console.error('Error resetting month spent for category', error);
            });
          }
        });

        // Actualizar lastExpenseClearDate a la fecha actual
        const currentDate = new Date().toISOString();
        userRef.update({ lastExpenseClearDate: currentDate }).then(() => {
        console.log('lastExpenseClearDate has been updated to the current date');
        }).catch((error) => {
        console.error('Error updating lastExpenseClearDate', error);
        });
        });
            }
          }else{
            if(actualMonth > parseInt(month)){
              const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
              categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
              snapshot.forEach((categorySnapshot) => {
              const categoryKey = categorySnapshot.key;
              if (categoryKey) { // Verificar que categoryKey no sea null
              const categoryData = categorySnapshot.payload.val() as { monthSpent: number };
             categoryData.monthSpent = 0;
            categoriesRef.update(categoryKey, categoryData).then(() => {
            }).catch((error) => {
            console.error('Error resetting month spent for category', error);
            });
          }
    });

          // Actualizar lastExpenseClearDate a la fecha actual
          const currentDate = new Date().toISOString();
          userRef.update({ lastExpenseClearDate: currentDate }).then(() => {
          console.log('lastExpenseClearDate has been updated to the current date');
          }).catch((error) => {
          console.error('Error updating lastExpenseClearDate', error);
          });
  });
            }
          }
          if(actualYear > year){
            const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
              categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
              snapshot.forEach((categorySnapshot) => {
              const categoryKey = categorySnapshot.key;
              if (categoryKey) { // Verificar que categoryKey no sea null
              const categoryData = categorySnapshot.payload.val() as { monthSpent: number };
             categoryData.monthSpent = 0;
            categoriesRef.update(categoryKey, categoryData).then(() => {
            }).catch((error) => {
            console.error('Error resetting month spent for category', error);
            });
          }
    });

          // Actualizar lastExpenseClearDate a la fecha actual
          const currentDate = new Date().toISOString();
          userRef.update({ lastExpenseClearDate: currentDate }).then(() => {
          console.log('lastExpenseClearDate has been updated to the current date');
          }).catch((error) => {
          console.error('Error updating lastExpenseClearDate', error);
          });
  });
          }
          // Aquí puedes realizar las operaciones que desees con el valor de lastExpenseClearDate
        });
      } else {
        console.log('No user found');
        // Mostrar una notificación o mensaje de error aquí
      }
    } catch (error) {
      console.error('Error', error);
      // Mostrar una notificación o mensaje de error aquí
    }   
  }
}
