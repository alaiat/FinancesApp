import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    console.log("setLoggedIn: " + this.isLoggedIn);
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
