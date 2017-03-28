import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Guide } from '../pages/guide/guide';
import { HotelsPage } from '../pages/hotels/hotels';
import { HotelPage } from '../pages/hotel/hotel';
import { BeachesPage } from '../pages/beaches/beaches';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { DataProvider } from '../providers/data';

// Import the AF2 Module
import { AngularFireModule} from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCWt5GCxnBgjnPlcOI5aabpKvfKgYSFqWc",
  authDomain: "travel-app-69ff2.firebaseapp.com",
  databaseURL: "https://travel-app-69ff2.firebaseio.com",
  storageBucket: "travel-app-69ff2.appspot.com",
  messagingSenderId: "617036971845"
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    Guide,
    HotelsPage,
    HotelPage,
    BeachesPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Guide,
    HotelsPage,
    HotelPage,
    BeachesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    DataProvider
  ]
})
export class AppModule {}
