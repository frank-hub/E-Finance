import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, ToastController} from 'ionic-angular';
import { SocialSharing } from "@ionic-native/social-sharing";
/**
 * Generated class for the LiteracyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-literacy',
  templateUrl: 'literacy.html',
})
export class LiteracyPage {

  constructor(public navCtrl: NavController,public socialSharing: SocialSharing ,public navParams: NavParams , public comment : AlertController , public toastCtl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiteracyPage');
  }
  commented;
  shows(){
    let prompt = this.comment.create({
      title:'Comment',
      message:"Waiting to see your comment",
      inputs:[
        {
          name:'msg',
          placeholder:"Comment here"
        },
      ],
      buttons:[
        {
          text:'Cancel',
          handler: data =>{
            console.log('Cancel Clicked');
          }
        },
        {
          text:'Comment',
          handler: data => {
            console.log(JSON.stringify(data)); //to see the object
            this.commented = JSON.stringify(data.msg);
            if (data.msg == "") {
              console.log("Empty Comment");
            }
            else{
              console.log(JSON.stringify(data.msg));
              let toast = this.toastCtl.create({
                message: (data.msg),
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }
  unlike = true;
  state :String = "Unlike"
like = () => {
  this.unlike = !this.unlike;
  if (this.unlike == false) {
    this.state = "like";
  }
  else {
    this.state = "Unlike";
  }
}
message = "hello";
share(){
this.socialSharing.share(this.message)
.then(()=>{

}).catch(()=>{

});
}

}



















