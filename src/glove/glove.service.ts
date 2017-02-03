import { api } from '../environments/environment.prod';
import { Glove } from './index';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GloveService {

    private _url = api.url + '/GloveSizes';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {
        console.log('Constructor for Glove Service' + this._url);

    }

    // getAll() {
    //     return this.http.get(this._url)
    //         .map(response => <Glove[]>response.json())
    //         .catch(error => {
    //             console.log(error);
    //             return Observable.throw(error);
    //         });
    // }
      getAll (): Promise<Glove[]> {
    return this.http.get(this._url)
               .toPromise()
               .then(response => response.json().data as Glove[])
               .catch(this.handleError);
  }
    get(id: number): Promise<Glove> {
        const url = `${this._url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Glove)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        console.log('delete' + id);
        const url = `${this._url}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    create(name: string): Promise<Glove> {
        console.log('create ' + name);
        return this.http
            .post(this._url, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    update(param: Glove): Promise<Glove> {

        const url = `${this._url}/${param.id}`;
        console.log('url', url);
        return this.http
            .put(url, JSON.stringify(param), { headers: this.headers })
            .toPromise()
            .then(() => param)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

