
import { Glove, GloveService } from './index';

// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
    </ul><fieldset>
    <button (click)="onSaved()">Save</button>
    <button (click)="onCanceled()">Cancel</button>
    <button (click)="onClose()">Close</button>
  </fieldset>`,
    providers: [GloveService]
})
export class GloveComponent implements OnInit {

    message = '';
    @Output() close = new EventEmitter<void>();
    //   @Input()
    //   get taxReturn(): HeroTaxReturn {
    //     return this.heroTaxReturnService.taxReturn;
    //   }
    //   set taxReturn (htr: HeroTaxReturn) {
    //     this.heroTaxReturnService.taxReturn = htr;
    //   }
 
    
    params2: Observable<Glove[]>;
    params: Glove[] = [];
    private selectedId: number;

    constructor(private _service: GloveService, private route: ActivatedRoute) { }

    init2() {
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

    isSelected(p: Glove) { this.flashMessage('isSelected'); return p.id === this.selectedId; }

    onSelect(p: Glove) {
        this.flashMessage('onSelect');
        // this.router.navigate(['/gown', p.id]);
    }

    onCanceled() {
        this.flashMessage('Canceled');
    }

    onClose() {
        this.flashMessage('onClose'); this.close.emit();
    };


    onSaved() {
        this.flashMessage('Saved');
    }

    flashMessage(msg: string) {
        this.message = msg;
        setTimeout(() => this.message = '', 500);
    }
}
