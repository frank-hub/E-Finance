import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController , ToastController} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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

  constructor(public navCtrl: NavController,public toastCtl : ToastController ,public navParams: NavParams ,public alert : AlertController ,public socialSharing : SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HierachyOfNeedsPage');
  }
  myComment
  comment(){
   let comment_prompt = this.alert.create({
     title : 'Comment Section',
     message : "Waiting to see your comment",
     inputs:[
       {
         name:'msg',
         placeholder:"Comment here"
       }
     ],
     buttons :[
       {
         text : 'Cancel',
         handler : data =>{
           console.log('Cancel Clicked')
         }
       },
       {
         text : 'Comment',
         handler : data => {
           console.log(JSON.stringify(data));
           this.myComment = JSON.stringify(data.msg);

           let toast = this.toastCtl.create({
             message : this.myComment,
             duration : 3000,
             position : 'bottom'
           });
toast.present();
         }

       }
     ]

   });
   comment_prompt.present();
  }
  share(){
    this.socialSharing.share("share")
    .then(()=>{

    }).catch(()=>{

    });
  }

}
