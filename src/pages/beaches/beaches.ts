import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the Beaches page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beaches',
  templateUrl: 'beaches.html'
})
export class BeachesPage {
  beaches: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  this.beaches = af.database.list('beaches');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachesPage');
  }

}
