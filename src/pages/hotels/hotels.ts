import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

import { HotelPage } from '../hotel/hotel';
import { HotelsProvider } from '../../providers/hotels';

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
  hotels: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    protected data: HotelsProvider,
    public af: AngularFire) {
  }

  ionViewDidLoad() {

    this.data.list('hotel').subscribe(res => {
          this.hotels = res;
    });

    console.log('ionViewDidLoad HotelsPage');
    let loading = this.loadingCtrl.create({
     spinner: 'crescent',
     content: 'Loading Please Wait...'
    });

    loading.present().then(() => {
      this.data.list('hotel').subscribe(res => {
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
