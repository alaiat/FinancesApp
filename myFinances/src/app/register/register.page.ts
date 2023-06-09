import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {};
  constructor(private router: Router, private afDB: AngularFireDatabase, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home');
  }

  register() {
    if (this.user.email && this.user.password) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((r) => {
        if (r?.user) {
          console.log(r.user);
          const currentDate = new Date();
          const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);
          this.afDB.object('users/' + r.user.uid).set({
            name: this.user.name,
            email: this.user.email,
            createdAt: Date.now(),
            password: this.user.password,
            balance: 0,
            lastExpenseClearDate: firstDayOfMonth.toISOString()
          }).then(() => {
            this.router.navigateByUrl('/login');
          });
        } else {
          console.log('Error creating user. User object is null.');
        }
      }).catch(e => {
        console.log(e);
      });
    }
  }
}
