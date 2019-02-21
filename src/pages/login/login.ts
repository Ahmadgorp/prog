import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterPage } from '../register/register';
import { auth } from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // @ViewChild ('username') user;
  // @ViewChild ('password') password;

  // constructor(private fire: AngularFireAuth,
  //    public navCtrl: NavController,
  //    public navParams: NavParams,
  //    public alertCtrl: AlertController
  //     ) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  // alert(message: string) {
  //   this.alertCtrl.create({
  //   title: 'Info',
  //   subTitle: message,
  //   buttons: ['OK']
  //   }).present();
  // }

  // signInUser(){
  //   this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  //   .then(data => {
  //     console.log('got some data', this.fire.auth.currentUser);
  //     this.alert('Success your login');
  //     this.navCtrl.setRoot( TabsPage);
  //     //user logged in
  //   })
  //   .catch( error => {
  //     console.log('got an error', error);
  //     this.alert(error.message);
  //   })



  //   console.log('Would sign in with ', this.user.value, this.password.value);

  //   }

  //   register(){
  //     this.navCtrl.push(RegisterPage);
      
  //   }

  // }

  username:string = ""
  password:string = ""


    constructor(public afAuth: AngularFireAuth,
      public navCtrl: NavController,) { }

    ngOnInit() {
    }
  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedwon.com', password)
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("User not found")
      }
    }
  }

  register(){
        this.navCtrl.push(RegisterPage);
        
      }

}
  


