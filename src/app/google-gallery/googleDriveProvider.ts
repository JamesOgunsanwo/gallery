import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-googleDriveProvider',
    providers: [GoogleDriveProvider]
  })
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: Http) {}

  load( id ) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json'; 
    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json() )
        .subscribe( data => {
          console.log( 'Raw Data', data );
          this.data = data.feed.entry;
          
          let returnArray: Array<any> = [];
          if( this.data && this.data.length > 0 ) {
            this.data.forEach( ( entry, index ) => {
              var obj = {};
              for( let x in entry ) {
                if( x.includes('gsx$') && entry[x].$t ){
                  obj[x.split('$')[1]] = entry[x]['$t'];
                  // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                }
              }
              returnArray.push( obj );
            });
          }
          resolve(returnArray);
        });
    });
  }
}