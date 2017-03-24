import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HotelPage } from '../hotel/hotel';

/*
  Generated class for the Hotels page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public af: AngularFire) {
  this.hotels = af.database.list('hotel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
    let loading = this.loadingCtrl.create({
     content: `<ion-spinner name="bubbles"></ion-spinner>`
    });

    loading.present().then(() => {
      this.hotels.subscribe(res => {
          if(res){
            console.log(res);
            loading.dismiss();
          }
       });
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HotelPage, {
      hotel: item
    });
  }

}
