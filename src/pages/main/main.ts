import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController,public socialSharing : SocialSharing) {
  }
  literacy() {
    this.navCtrl.push('LiteracyPage');
  }
  finance() {
    this.navCtrl.push('FinancialPage');
  }
  needs(){
    this.navCtrl.push('NeedAndWantsPage');
  }
  hierachy(){
    this.navCtrl.push('HierachyOfNeedsPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
}
