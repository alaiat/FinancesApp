import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userTel: string = '';
  userAboutMe: string = '';
  userProfileImage: string = '';
  constructor(private router:Router, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }

  async ionViewWillEnter() {
    (document.getElementById('tel') as HTMLInputElement).value = '';
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) {
      // Obtener el nombre del usuario actual desde la base de datos
      const userRef = this.afDB.object(`users/${currentUser.uid}`);
      userRef.valueChanges().subscribe((userData: any) => {
        this.userName = userData.name;
        this.userEmail = userData.email;
        this.userTel = userData.phone;
        this.userAboutMe = userData.aboutMe;
        this.userProfileImage = userData.imageURL;
      });
    }
  }

  async savePhoneNumber() {
    const phoneNumber = (document.getElementById('tel') as HTMLInputElement).value;
    if(phoneNumber.length == 9) {
      const currentUser = await this.afAuth.currentUser;
    if (currentUser) {
      const userRef = this.afDB.object(`users/${currentUser.uid}`);
      userRef.update({ phone: phoneNumber }).then(() => {
        alert('Phone number successfully saved!');
      }).catch((error) => {
        console.error('Error saving phone number', error);
      });
    }
    }else{
      alert('Phone number must have 9 digits');
    }
    // Guardar el número de teléfono en la base de datos
  }

  async saveAboutMe() {
    const aboutMe = (document.getElementById('aboutme') as HTMLInputElement).value;
    if(aboutMe.length <= 120) {
      const currentUser = await this.afAuth.currentUser;
    if (currentUser) {
      const userRef = this.afDB.object(`users/${currentUser.uid}`);
      userRef.update({ aboutMe: aboutMe }).then(() => {
        alert('About me successfully saved!');
      }).catch((error) => {
        console.error('Error saving about me', error);
      });
    }
    }else{
      alert('About me must have 120 digits or less');
    }
  }

  async onProfilePictureChange(event: any) {
    const file = event?.target?.files[0];
  
    if (file) {
      const reader = new FileReader();
      const currentUser = await this.afAuth.currentUser;
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        if (imageUrl) {
          this.userProfileImage = imageUrl;
          if (currentUser) {
            const userRef = this.afDB.object(`users/${currentUser.uid}`);
            userRef.update({ imageURL: this.userProfileImage }).then(() => {
              alert('Image successfully saved!');
            }).catch((error) => {
              console.error('Error saving image', error);
            });
          }
        }
      };
      reader.readAsDataURL(file);
    }
  }

}
