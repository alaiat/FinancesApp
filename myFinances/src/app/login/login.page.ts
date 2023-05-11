import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private router:Router, private authService: AuthService) { }

  checkLog() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Navigate to the home page
        console.log('Logged in!');
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('/tabs');
      })
      .catch((error) => {
        // Handle login error
        alert("The email or password you entered is incorrect.");
      });

  }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/tab1');
  }

}
