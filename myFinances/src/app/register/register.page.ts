import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';

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
    this.router.navigateByUrl('/tabs/tab1');
  }

  register() {
    if (this.user.email && this.user.password) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((r) => {
        if (r?.user) {
          console.log(r.user);
  
          this.afDB.object('users/' + r.user.uid).set({
            name: this.user.name,
            email: this.user.email,
            createdAt: Date.now(),
          }).then(() => {
            this.router.navigateByUrl('/tabs/tab1');
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
