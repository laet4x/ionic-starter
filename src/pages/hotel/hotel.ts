import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
   GoogleMaps,
   GoogleMapsEvent,
   LatLng
} from '@ionic-native/google-maps';

/*
  Generated class for the Hotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
  providers: [GoogleMaps]
})
export class HotelPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googleMaps: GoogleMaps) {
	  // If we navigated to this page, we will have an item available as a nav param
	  this.selectedItem = navParams.get('hotel');
  }
  ngAfterViewInit() {
   this.loadMap();
  }
  loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element = document.getElementById('map');

 let map = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(() => {console.log('Map is ready!')});

 // create LatLng object
 let ionic = new LatLng(43.0741904,-89.3809802);
 console.log("43.0741904,-89.3809802");
 // create CameraPosition
 let position = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 /*// create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };

 const marker: Marker = map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });*/
 }

}
