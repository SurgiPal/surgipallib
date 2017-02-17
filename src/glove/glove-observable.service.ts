import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import { api } from '../environments/environment.prod';
import { Glove } from './index';
import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class GloveObservableService { 
    private _url = api.url + '/GloveSizes';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private authHttp: AuthHttp) {
        console.log('Constructor for Glove Service: ' + this._url);
 
    }
 
    get(id: number): Observable<Glove> {
        const url = `${this._url}/${id}`;
        return this.authHttp.get(url)
     //  .map(res=>res.json())
           .map(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number): Observable<void> {
        console.log('delete' + id);
        const url = `${this._url}/${id}`;
        return this.authHttp.delete(url, { headers: this.headers })
            .catch(this.handleError);
    }
    create(name: string): Observable<Glove> {
        console.log('create ' + name);
        return this.authHttp
            .post(this._url, JSON.stringify({ name: name }), { headers: this.headers })  
        .map(this.extractData)
            .catch(this.handleError);
    } 
    update(param: Glove): Observable<Glove> { 
        const url = `${this._url}/${param.id}`; 
        return this.authHttp
            .put(url, JSON.stringify(param), { headers: this.headers })
             .map(this.extractData)
            .catch(this.handleError);
    }
 
    getAll (): Observable<Glove[]> {
    return this.authHttp.get(this._url)
                 .map(this.extractData); 
                 
                 //  .map(res=>res.json());
    // return this.authHttp.get(this._url)
    //            .toPromise()
    //            .then(response =>   <Glove[]>  response.json())
    //            .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
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
}

