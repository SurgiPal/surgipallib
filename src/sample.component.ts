// import { HERO_DI_CONFIG } from './environments/environment';
import {Component} from '@angular/core';
// import { OpaqueToken } from '@angular/core';
// export let APP_CONFIG = new OpaqueToken('app.config');


@Component({
  selector: 'surgipal-component',
  template: `<h1>Sample Raphael</h1>`
 // , providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})
export class SurgiPalComponent {


//   constructor(@Inject(APP_CONFIG) config: AppConfig) {
//   this.title = config.title;
// }

  constructor() {
  }

}
