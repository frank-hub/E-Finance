import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocialSharing} from'@ionic-native/social-sharing';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the FinancialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html',
})
export class FinancialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController ,public socialSharing:SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancialPage');
  }
  title: string = "Knowledge and Understanding";
  message1: string = "1.It often entails the knowledge of properly making decisions pertaining to certain personal finance areas like real estate ,  insurance, investing, saving(especially for college), tax planning and retirement."
  message2: string = "2.It also involves intimate knowledge of financial concepts like compound interest , financial planning, the mechanics of a credit-card, advantageous savings methods, consumer rights, time value of money. " ;
  share() {
    this.socialSharing.share("Knowledge and Understanding",this.message1)
.then(()=>{

}).catch(()=>{

});
  }
}
