import { Component, OnInit } from '@angular/core';
import { MenuController, NavController} from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-homeLog',
  templateUrl: 'homeLog.page.html',
  styleUrls: ['homeLog.page.scss']
})
export class HomeLog implements OnInit{
  selectedCategory!: string;
  categoryOptions!: string[];
  currentBalance!: number;
  constructor(private menuCtrl: MenuController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.getCurrentUserBalance();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
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
            incomeRef.push({ incomeDesc, incomeValue, createdAt: Date.now()}).then(() => {
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
  }
  

  async declareExpense() {
    const description = (document.getElementById('description-input') as HTMLInputElement).value;
    const category = (document.getElementById('category-select') as HTMLIonSelectElement).value;
    const quantity = (document.getElementById('quantity-input') as HTMLInputElement).value;
  
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
            expenseRef.push({ description, category, quantity, createdAt: Date.now()}).then(() => {
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
  }
  

  getCurrentUserBalance() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const balanceRef = this.afDB.object<number | null>(`users/${user.uid}/balance`);
        balanceRef.valueChanges().subscribe(
          (balance: number | null) => {
            if (balance !== null) {
              this.currentBalance = balance;
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
  
}
