import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiteracyPage } from './literacy';

@NgModule({
  declarations: [
    LiteracyPage,
  ],
  imports: [
    IonicPageModule.forChild(LiteracyPage),
  ],
})
export class LiteracyPageModule {}
