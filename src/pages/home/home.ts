import { Component, ViewChild } from '@angular/core';
import { NavController,  NavParams , AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild ('username') uname;
  @ViewChild ('password') password;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {

  }

  // signIn(){
  //   this.navCtrl.push(LoginPage);
  // }

  // register(){
  //   this.navCtrl.push(RegisterPage);
  // }


}
