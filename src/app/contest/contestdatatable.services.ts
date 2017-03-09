/*main contest-DatatableService*/
import { Injectable, Inject }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 
import { MaincontestDetails } from './main.component';

@Injectable() 
export class DatatableService{  
private jsonurl='/assets/data/maincontestdata.json';
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
    return Observable.throw(errMsg);
  }

  getMyMaincontestList(): Observable<MaincontestDetails[]> {
   // alert(this.jsonurl);
    //let data = new URLSearchParams();
   // data.append('token', userToken);
    return this.http.get(this.jsonurl)
      .map(this.extractData)
      .catch(this.handleError);
  }
   private extractData(res: Response) {
    let body = res.json();
    //alert(JSON.stringify(res.json()))
    return body.data || {};
  }


}

