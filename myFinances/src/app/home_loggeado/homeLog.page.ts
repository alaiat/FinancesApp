import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeLog',
  templateUrl: 'homeLog.page.html',
  styleUrls: ['homeLog.page.scss']
})
export class HomeLog {

  constructor(private menuCtrl: MenuController) {}

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

  enviarRespuestas(formularioId: string) {
    // Aquí puedes agregar la lógica para enviar las respuestas del formulario
    console.log("Respuestas del formulario " + formularioId + " enviadas con éxito.");
  }
}
