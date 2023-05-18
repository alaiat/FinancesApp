import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
@Component({
  selector: 'category-select-bi',
  template: `
    <ion-list style="background-color: #f5f5f5;">
      <ion-item>
        <ion-select [(ngModel)]="selectedCategory2" id="category-select-bi">
          <ion-select-option *ngFor="let category of categoryOptions2" [value]="category">
            {{ category }}
          </ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
  `,
})
export class CategorySelectBiComponent implements OnInit {
  selectedCategory2!: string;
  categoryOptions2: string[] = [];

  constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.afAuth.currentUser.then((user) => {
      if (user) {
        const categoriesRef = this.afDB.list(`users/${user.uid}/categories`);
        categoriesRef.valueChanges().pipe(
          map((categories: any[]) => categories.map(category => category.category))
        ).subscribe((categories: string[]) => {
          this.categoryOptions2 = categories;
        });
      }
    });
  }
}
