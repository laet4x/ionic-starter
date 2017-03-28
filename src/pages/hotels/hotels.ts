import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { HotelPage } from '../hotel/hotel';
import { DataProvider } from '../../providers/data';
import 'rxjs/add/operator/map';
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
     // this.hotels = this.data.list('/hotel');
     this.data.get('assets/data/data.json')
      .map((res) => res.json())
      .subscribe(data => {
        this.hotels = data.hotels;
        console.log(data.hotels);
      }, (rej) => {
        console.error("Could not load local data",rej);
      });

      console.log('ionViewWillEnter HotelsPage');
      let loading = this.loadingCtrl.create({
       spinner: 'crescent',
       content: 'Loading Please Wait...'
      });

      loading.present().then(() => {
        this.data.get('assets/data/data.json')
        .map((res) => res.json())
        .subscribe(data => {
        if(data){
           loading.dismiss();
        }
        }, (rej) => {
          console.error("Could not load local data",rej);
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
