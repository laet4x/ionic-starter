import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { HotelPage } from '../hotel/hotel';
import { DataProvider } from '../../providers/data';

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
    protected data: DataProvider) {
  }
  ionViewWillEnter(){
     this.hotels = this.data.list('/hotel');

      console.log('ionViewWillEnter HotelsPage');
      let loading = this.loadingCtrl.create({
       spinner: 'crescent',
       content: 'Loading Please Wait...'
      });

      loading.present().then(() => {
        this.data.list('/hotel').subscribe(res => {
            if(res){
              loading.dismiss();
            }
         });
      });
  }

  ionViewDidLoad() {
  
  }

  ionViewWillUnload() {
    this.data.list('hotel').subscribe().unsubscribe();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HotelPage, {
      hotel: item
    });
  }

}
