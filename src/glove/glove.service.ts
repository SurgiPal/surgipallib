import { Observable } from 'rxjs/Observable';
import { api } from '../environments/environment.prod';
import { Glove } from './index';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GloveService {
    private _url = api.url + '/GloveSizes';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private authHttp: AuthHttp) {
        console.log('Constructor for Glove Service' + this._url);
    }
    getAll(): Promise<Glove[]> {
        return this.authHttp.get(this._url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    get(id: number): Promise<Glove> {
        const url = `${this._url}/${id}`;
        return this.authHttp.get(url)
            .toPromise()
                   .then(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        console.log('delete' + id);
        const url = `${this._url}/${id}`;
        return this.authHttp.delete(url, { headers: this.headers })
            .toPromise() 
                   .then(() => null)
            .catch(this.handleError);
    }
    create(name: string): Promise<Glove> {
        console.log('create ' + name);
        return this.authHttp
            .post(this._url, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
                    .then(this.extractData)
            .catch(this.handleError);
    }
    update(param: Glove): Promise<Glove> {

        const url = `${this._url}/${param.id}`;
        console.log('url', url);
        return this.authHttp
            .put(url, JSON.stringify(param), { headers: this.headers })
            .toPromise()
            .then(() => param)
            .catch(this.handleError);
    }
    
      private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

