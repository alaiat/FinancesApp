import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.page.html',
  styleUrls: ['./remove-category.page.scss'],
})
export class RemoveCategoryPage implements OnInit {


  constructor(private router: Router, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }


  ngOnInit() {
  }


  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }


  async removeCategory() {
    const category = (document.getElementById('category-select-lau') as HTMLIonSelectElement).value;
    console.log(category);
    if (category !== '') {
      try {
        const currentUser = await this.afAuth.currentUser;
        if (currentUser) {
          const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
 
          categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
            const categoryToDelete = snapshot.find((categorySnapshot) => {
              const data = categorySnapshot.payload.val() as { category: string; limit: number };
              return data.category === category;
            });
 
            if (categoryToDelete) {
              const categoryKey = categoryToDelete.key;
              if (categoryKey) {
                categoriesRef.remove(categoryKey).then(() => {
                  console.log('Category successfully removed!');
                  alert('Category successfully removed!');
                  (document.getElementById('category-select-bi') as HTMLIonSelectElement).value = '';
                  (document.getElementById('limit-input') as HTMLInputElement).value = '';
                }).catch((error) => {
                  console.error('Error removing category', error);
                });
              }
            } else {
              console.log('Category not found');
              // Mostrar una notificación o mensaje de error aquí
            }
          });
        } else {
          console.log('No user found');
          // Mostrar una notificación o mensaje de error aquí
        }
      } catch (error) {
        console.error('Error', error);
        // Mostrar una notificación o mensaje de error aquí
      }
    } else {
      alert('Please select a category');
    }
  }  
}
