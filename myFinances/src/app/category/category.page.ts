import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private router: Router, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }

  async declareCategory() {
    const category = (document.getElementById('category-input') as HTMLInputElement).value;
  
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const categoryRef = this.afDB.list(`users/${currentUser.uid}/categories`);
        await categoryRef.push(category);
        alert('Category successfully saved!');
        (document.getElementById('category-input') as HTMLInputElement).value = '';
      } else {
        console.log('No user found');
        // Mostrar una notificación o mensaje de error aquí
      }
    } catch (error) {
      console.error('Error saving expense', error);
      // Mostrar una notificación o mensaje de error aquí
    }
  }
}
