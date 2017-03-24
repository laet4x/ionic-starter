import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Hotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html'
})
export class HotelPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  // If we navigated to this page, we will have an item available as a nav param
	  this.selectedItem = navParams.get('hotel');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

}
