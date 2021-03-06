import { Injectable } from '@angular/core';
//import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {
  AngularFireOffline,
  AfoListObservable,
  AfoObjectObservable } from 'angularfire2-offline';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Hotels provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  constructor(private af: AngularFireOffline,private http: Http) {
    console.log('Hello Data Provider');
  }

  push(path: string, data: any): Observable<any> {
    return Observable.create(observer => {
      this.af.database.list(path).push(data).then(firebaseNewData => {
        // Return the uid created
        let newData: any = firebaseNewData;
        observer.next(newData.path.o[newData.path.o.length - 1]);
      }, error => {
        observer.error(error);
      });
    });
  }

  update(path: string, data: any) {
    this.af.database.object(path).update(data);
  }

  list(path: string): AfoListObservable<any[]> {
    return this.af.database.list(path);
  }
    
  object(path: string): AfoObjectObservable<any> {
    return this.af.database.object(path);
  }

  get(path: string): any {
    return this.http.get(path);
  }

  remove(path: string): Observable<any> {
    return Observable.create(observer => {
      this.af.database.object(path).remove().then(data => {
        observer.next();
      }, error => {
        observer.error(error);
      });
    });
  }

}
