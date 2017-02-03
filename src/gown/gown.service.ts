import { Injectable } from '@angular/core';
import { api } from '../environments/environment.prod';
import { Gown } from './index';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GownService {
    private _url = api.url + '/GownSizes';
 private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {
        console.log('Constructor for Gown Service' + api.url);
    }
getAll(): Promise<Gown[]> {
    return this.http.get(this._url)
               .toPromise()
               .then(response => response.json().data as Gown[])
               .catch(this.handleError);

  }
  get(id: number): Promise<Gown> {
    const url = `${this._url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Gown)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
       console.log('delete' + id);
    const url = `${this._url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Gown> {
    console.log('create' + name);
    return this.http
      .post(this._url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: Gown): Promise<Gown> {
      console.log('heroserv', hero);
    const url = `${this._url}/${hero.id}`;
    console.log('url', url);
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
