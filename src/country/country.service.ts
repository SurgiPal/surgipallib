import { Country } from './../models/paramModels';
import { Injectable } from '@angular/core';
import { api } from '../environments/environment.prod';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CountryService {
    private _url = api.url + '/Countries';
 private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {
        console.log('Constructor for Country Service' + api.url);
    }
getAll(): Promise<Country[]> {
    return this.http.get(this._url)
               .toPromise()
               .then(response => response.json().data as Country[])
               .catch(this.handleError);

  }
  get(id: number): Promise<Country> {
    const url = `${this._url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Country)
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
  create(name: string): Promise<Country> {
    console.log('create' + name);
    return this.http
      .post(this._url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: Country): Promise<Country> {
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
