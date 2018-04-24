import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public viewCtrl: ViewController, public splashScreen : SplashScreen) {
    
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);

    console.log('ionViewDidLoad SplashPage');
  }

}
