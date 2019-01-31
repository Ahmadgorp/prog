import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  

  @ViewChild ('username') user;
  @ViewChild ('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got data', data);
      this.alert('Registered');
    })
    .catch(error => {
      console.log('got an error',error);
      this.alert(error.message);
    });

    console.log('Would sign in with ', this.user.value, this.password.value);

    }

  }
  


