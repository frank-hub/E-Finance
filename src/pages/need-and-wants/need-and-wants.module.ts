import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedAndWantsPage } from './need-and-wants';

@NgModule({
  declarations: [
    NeedAndWantsPage,
  ],
  imports: [
    IonicPageModule.forChild(NeedAndWantsPage),
  ],
})
export class NeedAndWantsPageModule {}
