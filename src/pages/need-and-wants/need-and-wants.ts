import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController ,ToastController } from 'ionic-angular';

/**
 * Generated class for the NeedAndWantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-need-and-wants',
  templateUrl: 'need-and-wants.html',
})
export class NeedAndWantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtl : ToastController , public needComment : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedAndWantsPage');
  }

  like = true;
  state = "Unlike";
   head =() => {
     this.like = !this.like ;
     if(this.like == true){
       this.state = "like";
     }
     else{
       this.state = "Unlike";
     }
   }
   commented ;
   show(){
  let prompty= this.needComment.create({
    title:"Comment",
    message:"Waiting for your comment",
    inputs:[
      {
        name:'msg1',
        placeholder:'Comment here'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel Clicked');
        }
      },
      {
        text: 'Comment',
        handler: data => {
          console.log(JSON.stringify(data)); //to see the object
          this.commented = console.log(JSON.stringify(data.msg1));
          let toast = this.toastCtl.create({
            message: (data.msg1),
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.commented = JSON.stringify(data.msg1);
        }
      }
    ]
  });
  prompty.present();
   }
}
