import { Component } from '@angular/core';

import { Alert,AlertController, IonicPage,NavController } from "ionic-angular";
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	public userProfile: any;
	public birthDate: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public authProvider: AuthProvider,
public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
    	this.userProfile = userProfileSnapshot.val();
    	this.birthDate = userProfileSnapshot.val().birthDate;
});
  }

}
