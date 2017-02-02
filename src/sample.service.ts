import { Glove } from './models/Glove';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { api } from './environments/environment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SampleService {

    private _url = api.url + '/GloveSizes';

    constructor(private http: Http) {
console.log('Constructor for Sample Service' + api.url);

    }

    getContacts() {
        return this.http.get(this._url)
            .map(response => <Glove[]>response.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }
}
