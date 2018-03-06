import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvetListPage } from './evet-list';

@NgModule({
  declarations: [
    EvetListPage,
  ],
  imports: [
    IonicPageModule.forChild(EvetListPage),
  ],
})
export class EvetListPageModule {}
