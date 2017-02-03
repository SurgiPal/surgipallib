import { adminRoutes } from './../../environments/environment.prod';
import { Component  } from '@angular/core';

@Component({
  selector: 'surgipal-parameter-drop',
  template: `<a class='dropdown-button btn' href='#' data-activates='dropdown1'>{{buttonTitle}}</a> 
  <ul id='dropdown1' class='dropdown-content'>
    <li *ngFor="let option of selectOptions"><a  [href]="option.value">{{option.name}}</a></li>
  </ul>`
})
export class ParamDropdownComponent   {
 selectOptions: any;
  constructor() {
  this.selectOptions = adminRoutes;
  }
}
