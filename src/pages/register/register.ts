import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController
      ) {
  }

  registerUser(){
    console.log('Would sign in with ', this.user.value, this.password.value);

    }

  }
  


