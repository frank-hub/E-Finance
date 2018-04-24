import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HierachyOfNeedsPage } from './hierachy-of-needs';

@NgModule({
  declarations: [
    HierachyOfNeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(HierachyOfNeedsPage),
  ],
})
export class HierachyOfNeedsPageModule {}
