import { Param } from './../models/param';
import {GownService, Gown} from './index';
import { } from 'appli'
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// import { HERO_DI_CONFIG } from './environments/environment';

// import { OpaqueToken } from '@angular/core';
// export let APP_CONFIG = new OpaqueToken('app.config');

@Component({
  selector: 'surgipal-gown-component',
  template: `<h1>Gown Size</h1>
  <ul class="items">
      <li *ngFor="let p of params | async"
        [class.selected]="isSelected(p)"
        (click)="onSelect(p)">
        <span class="badge">{{ p.id }}</span> {{ p.name }}
      </li>
    </ul>`
})
export class GownComponent implements OnInit {

  params2: Observable<Gown[]>;
  params: Gown[] = [];
  private selectedId: number;

  constructor(private _service: GownService,    private route: ActivatedRoute) { }

init2(){
  this.params2 = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this._service.getAll();
      });
  }
  ngOnInit() {
    this._service.getAll().then(data => this.params = data);
    this.init2();
  }

  isSelected(p: Param) { return p.id === this.selectedId; }

  onSelect(p: Param) {
   // this.router.navigate(['/gown', p.id]);
  }
}
