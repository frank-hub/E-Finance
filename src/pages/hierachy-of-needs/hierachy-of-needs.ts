import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';

/**
 * Generated class for the HierachyOfNeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hierachy-of-needs',
  templateUrl: 'hierachy-of-needs.html',
})
export class HierachyOfNeedsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public socialSharing : SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HierachyOfNeedsPage');
  }
  share(){
    this.socialSharing.share("share")
    .then(()=>{

    }).catch(()=>{

    });
  }

}
