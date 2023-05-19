import { Component, OnInit } from '@angular/core';
import { MenuController, NavController} from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { resolve } from 'dns';
@Component({
  selector: 'app-homeLog',
  templateUrl: 'homeLog.page.html',
  styleUrls: ['homeLog.page.scss']
})
export class HomeLog implements OnInit{
  selectedCategory!: string;
  categoryOptions!: string[];
  selectedCategory2!: string;
  categoryOptions2!: string[];
  currentBalance!: number;
  balanceColor: string = '';
  selectedDateExpense: string = new Date().toISOString();
  extractedDateExpense: string = new Date().toISOString();
  selectedDateIncome: string = new Date().toISOString();
  extractedDateIncome: string = new Date().toISOString();
  constructor(private menuCtrl: MenuController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private authServ: AuthService) {}

  ngOnInit() {
    this.getCurrentUserBalance();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  logout(){
    this.afAuth.signOut()
    .then(() => {
      // Cierre de sesión exitoso
      console.log('Logged out!');
      this.authServ.setLoggedIn(false);
      this.router.navigateByUrl('/tabs/home');
      // Realiza las acciones adicionales que desees después de cerrar sesión
    })
    .catch((error) => {
      // Manejo del error de cierre de sesión
      console.log('Error logging out:', error);
    });
  }


  mostrarFormulario1() {
    const buttons = document.getElementById("buttonContainer")
    if (buttons!==null){
      buttons.style.display="none"
    }
    this.ocultarForms();
    const card = document.querySelector('ion-card.contenedor-formularios');
    if (card) {
      card.setAttribute('style', 'background-color: #f5f5f5; width: 40%; border:black 2px solid;');
    }
    const welcome = document.getElementById("welcome")
    if (welcome!==null){
      welcome.style.display="none"
    }
    const formulario = document.getElementById("formulario1");
    if (formulario) {
      if (formulario.style.display === "block") {
        formulario.style.display = "none";
      } else {
        formulario.style.display = "block";
      }
    }
  }
  mostrarFormulario2() {
    const buttons = document.getElementById("buttonContainer")
    if (buttons!==null){
      buttons.style.display="none"
    }
    this.ocultarForms();
    const card = document.querySelector('ion-card.contenedor-formularios');
    if (card) {
      card.setAttribute('style', 'background-color: #f5f5f5; width: 40%; border:black 2px solid;');
    }
    const welcome = document.getElementById("welcome")
    if (welcome!==null){
      welcome.style.display="none"
    }
    const formulario = document.getElementById("formulario2");
    if (formulario) {
      if (formulario.style.display === "block") {
        formulario.style.display = "none";
      } else {
        formulario.style.display = "block";
      }
    }
  }
  mostrarFormulario3() {
    const buttons = document.getElementById("buttonContainer")
    if (buttons!==null){
      buttons.style.display="none"
    }
    this.ocultarForms();
    const card = document.querySelector('ion-card.contenedor-formularios');
    if (card) {
      card.setAttribute('style', 'background-color: #f5f5f5; width: 40%; border:black 2px solid;');
    }
    const welcome = document.getElementById("welcome")
    if (welcome!==null){
      welcome.style.display="none"
    }
    const formulario = document.getElementById("formulario3");
    if (formulario) {
      if (formulario.style.display === "block") {
        formulario.style.display = "none";
      } else {
        formulario.style.display = "block";
      }
    }
  }

  ocultarForms() {
    const formulario1 = document.getElementById('formulario1');
    const formulario2 = document.getElementById('formulario2');
    const formulario3 = document.getElementById('formulario3');

    if (formulario1 !== null) {
      formulario1.style.display = 'none';
    }

    if (formulario2 !== null) {
      formulario2.style.display = 'none';
    }

    if (formulario3 !== null) {
      formulario3.style.display = 'none';
    }
  }
  cerrarFormulario(formularioId: string) {
    var formulario = document.getElementById(formularioId);
    if (formulario!==null){
      formulario.style.display = "none";
    }
    var buttons = document.getElementById("buttonContainer")
    if (buttons!==null){
      buttons.style.display="flex"
      buttons.style.flexDirection="column"
    }
    const card = document.querySelector('ion-card.contenedor-formularios');
    if (card) {
      card.setAttribute('style', 'background-color: whitesmoke;');
    }
  }

  declareIncome() {
    const incomeValue = (document.getElementById('income-input') as HTMLInputElement).value;
    const incomeDesc = (document.getElementById('desc-input') as HTMLInputElement).value;
    const date= this.extractedDateIncome;
    console.log(date);
    this.afAuth.currentUser.then((user) => {
      if (user) {
        const balanceRef = this.afDB.object<number>(`users/${user.uid}/balance`);

        // Obtener el balance actual del usuario
        balanceRef.valueChanges().pipe(take(1)).subscribe((currentBalance) => {
          const currentBalanceNumber = typeof currentBalance === 'number' ? currentBalance : 0;
          const newBalance = currentBalanceNumber + Number(incomeValue);

          // Actualizar el balance en la base de datos
          balanceRef.set(newBalance).then(() => {
            const incomeRef = this.afDB.list(`users/${user.uid}/income`);
            incomeRef.push({ incomeDesc, incomeValue, date}).then(() => {
              console.log('Income successfully saved!');
              alert('Income successfully saved!');
              (document.getElementById('income-input') as HTMLInputElement).value = '';
              (document.getElementById('desc-input') as HTMLInputElement).value = '';
            }).catch((error) => {
              console.error('Error saving income', error);
            });
          }).catch((error) => {
            console.error('Error updating balance', error);
          });
        });
      } else {
        console.log('No user found');
      }
    }).catch((error) => {
      console.error('Error', error);
    });
    this.cerrarFormulario('formulario2');
  }


  async getCategoryLimit(category: string): Promise<number | null> {
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
  
        return new Promise<number | null>((resolve, reject) => {
          categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
            const categories = snapshot.map((categorySnapshot) => {
              const data = categorySnapshot.payload.val() as { category: string; limit: number };
              return {
                key: categorySnapshot.key,
                category: data.category,
                limit: data.limit
              };
            });
  
            const selectedCategory = categories.find((c) => c.category === category);
            if (selectedCategory) {
              const limit = selectedCategory.limit;
              resolve(limit);
            } else {
              resolve(null); // La categoría no existe
            }
          });
        });
      } else {
        console.log('No user found');
        throw new Error('No user found');
      }
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  }

  async getMonthSpentByCategory(category: string): Promise<number> {
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);
  
        return new Promise<number>((resolve, reject) => {
          categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
            const categories = snapshot.map((categorySnapshot) => {
              const data = categorySnapshot.payload.val() as { category: string; monthSpent: number };
              return {
                key: categorySnapshot.key,
                category: data.category,
                monthSpent: data.monthSpent
              };
            });
  
            const selectedCategory = categories.find((c) => c.category === category);
            if (selectedCategory) {
              resolve(selectedCategory.monthSpent);
            } else {
              console.log('Category not found');
              reject('Category not found');
            }
          });
        });
      } else {
        console.log('No user found');
        return Promise.reject('No user found');
      }
    } catch (error) {
      console.error('Error', error);
      return Promise.reject(error);
    }
  }
  
  async declareExpense() {
    const description = (document.getElementById('description-input') as HTMLInputElement).value;
    const category = (document.getElementById('category-select') as HTMLIonSelectElement).value;
    const quantity = (document.getElementById('quantity-input') as HTMLInputElement).value;
    const date = this.extractedDateExpense;
    
    let monthSpentPromise = this.getMonthSpentByCategory(category);
    let monthSpent: number = 0; // Inicializar con un valor predeterminado

    try {
        monthSpent = await monthSpentPromise;
        let total = monthSpent + Number(quantity);
        console.log(`Total: ${total}`);
        const limit = await this.getCategoryLimit(category);
      if (limit !== null) {
        if(total > limit && limit != -1){
          alert('You have exceeded the limit of the category');
        }
      } else {
        console.log(`Category "${category}" not found`);
      }
        } catch (error) {
        console.error('Error getting month spent', error);
        }

    this.updateCategorySpent(category, Number(quantity));
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        const balanceRef = this.afDB.object<number>(`users/${currentUser.uid}/balance`);
    
        // Obtener el balance actual del usuario
        balanceRef.valueChanges().pipe(take(1)).subscribe((currentBalance) => {
          const currentBalanceNumber = typeof currentBalance === 'number' ? currentBalance : 0;
          const newBalance = currentBalanceNumber - Number(quantity);
    
          // Actualizar el balance en la base de datos
          balanceRef.set(newBalance).then(() => {
            const expenseRef = this.afDB.list(`users/${currentUser.uid}/expenses`);
            expenseRef.push({ description, category, quantity, date }).then(() => {
              console.log('Expense successfully saved!');
              alert('Expense successfully saved!');
              (document.getElementById('description-input') as HTMLInputElement).value = '';
              (document.getElementById('category-select') as HTMLIonSelectElement).value = '';
              (document.getElementById('quantity-input') as HTMLInputElement).value = '';
    
            }).catch((error) => {
              console.error('Error saving expense', error);
            });
          }).catch((error) => {
            console.error('Error updating balance', error);
          });
        });
      } else {
        console.log('No user found');
        // Mostrar una notificación o mensaje de error aquí
      }
    } catch (error) {
      console.error('Error', error);
      // Mostrar una notificación o mensaje de error aquí
    }    
    
    this.cerrarFormulario('formulario1');
  }
  dateChangeExpense(){
    this.extractedDateExpense = this.selectedDateExpense.split('T')[0];
    console.log("expense: "+this.extractedDateExpense);
  }
  dateChangeIncome(){
    this.extractedDateIncome = this.selectedDateIncome.split('T')[0];
    console.log("income: "+this.extractedDateIncome);
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

  async declareCategoryLimit() {
    const category = (document.getElementById('category-select-bi') as HTMLIonSelectElement).value;
    console.log(category);
    const limit = (document.getElementById('limit-input') as HTMLInputElement).value;
    console.log(limit);
    if(category != '' && parseInt(limit) >= -1){
      try {
        const currentUser = await this.afAuth.currentUser;
        if (currentUser) {
          const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);

          categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
            const categories = snapshot.map((categorySnapshot) => {
              const data = categorySnapshot.payload.val() as { category: string; limit: number };
              return {
                key: categorySnapshot.key,
                category: data.category,
                limit: data.limit
              };
            });

            const selectedCategory = categories.find((c) => c.category === category);
            if (selectedCategory) {
              selectedCategory.limit = Number(limit);

              const updatedCategory = {
                category: selectedCategory.category,
                limit: selectedCategory.limit
              };
              if(selectedCategory.key){
                categoriesRef.update(selectedCategory.key, updatedCategory).then(() => {
                  console.log('Category limit successfully updated!');
                  alert('Category limit successfully updated!');
                  (document.getElementById('category-select-bi') as HTMLIonSelectElement).value = '';
                  (document.getElementById('limit-input') as HTMLInputElement).value = '';
                }).catch((error) => {
                  console.error('Error updating category limit', error);
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
    }else{
      alert('Please fill all the fields correctly');
    }
  }

  async updateCategorySpent(category: string, quantity: number) {
    if (category != '') {
      try {
        const currentUser = await this.afAuth.currentUser;
        if (currentUser) {
          const categoriesRef = this.afDB.list(`users/${currentUser.uid}/categories`);

          categoriesRef.snapshotChanges().pipe(take(1)).subscribe((snapshot) => {
            const categories = snapshot.map((categorySnapshot) => {
              const data = categorySnapshot.payload.val() as { category: string; monthSpent: number };
              return {
                key: categorySnapshot.key,
                category: data.category,
                monthSpent: data.monthSpent
              };
            });

            const selectedCategory = categories.find((c) => c.category === category);
            if (selectedCategory) {

              const updatedCategory = {
                category: selectedCategory.category,
                monthSpent: selectedCategory.monthSpent + quantity
              };
              if(selectedCategory.key){
                categoriesRef.update(selectedCategory.key, updatedCategory).then(() => {
                  alert('Monthly successfully updated!');
                }).catch((error) => {
                  console.error('Error updating category limit', error);
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
      alert('Please fill all the fields correctly');
    }
  }
  
  
  

  bulbTips(){
    this.router.navigateByUrl('/bulb-tips');
  }
}
