import { Injectable, Inject }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 
import { AlluserdataDetails } from './allusers.component';
@Injectable() 
export class AlluserdatatableServices{  
constructor(private http : Http){   } 
private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  getMyAlluserdataList(): Observable<AlluserdataDetails[]> {
    let data = new URLSearchParams();
    //data.append('token', userToken);
    return this.http.get('/assets/data/allusers.json')
      .map(response => <AlluserdataDetails[]> response.json().data)
      .catch(this.handleError);
  }
   private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

}

