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
import { HotelsProvider } from '../providers/hotels';

// Import the AF2 Module
import { AngularFireModule} from 'angularfire2';

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
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
    HotelsProvider
  ]
})
export class AppModule {}
