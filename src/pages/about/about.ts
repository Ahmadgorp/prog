import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
imageURL:string
  constructor(public navCtrl: NavController,
    public http: Http) {

  }

  fileChanged(event){
    const files = event.target.files
    // console.log(files)
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '28073a14c4a03f78a02a')

    this.http.post('https://upload.uploadcare.com/base/',data)
    .subscribe(event => {
      console.log(event)
      this.imageURL = event.json().file
    })
  }

}
