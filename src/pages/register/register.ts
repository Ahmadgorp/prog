import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';
import { auth } from 'firebase/app';

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

  username : string =""
  password : string =""
  cpassword : string = ""

    constructor(public afAuth: AngularFireAuth,
      public alert: AlertController,
      public navCtrl: NavController) { }

    ngOnInit() {
    }
    async register(){
      const { username, password, cpassword} = this
      if(password !== cpassword) {
        this.showAlert("Error","Passwords don`t match")
        return console.error("Password don`t match") 
      }
      try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedwon.com', password)
        console.log(res)
        this.showAlert("Success!", "Welcome aboard!")
      }catch(error) {
        console.dir(error)
        this.showAlert("Error", error.message)
      }
    }

    async showAlert(header:string, message:string) {
      const alert = await this.alert.create({
        title: 'hello',
        message,
        buttons: ["OK"]
      })
      await alert.present()
    }
}
  


