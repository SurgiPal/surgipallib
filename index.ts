 import { NgModule, ModuleWithProviders, enableProdMode} from '@angular/core';
import { HttpModule } from '@angular/http';
import {  GloveService, GloveObservableService } from './src/glove';
import {  GownService } from './src/gown';
import {  CountryService } from './src/country';
import {  SpecialityService } from './src/speciality';
import { ParamDropdownComponent } from './src/shared/components';
import { CommonModule } from '@angular/common';
import { SurgipalLibDirective } from './src/surgipallib.directive';
import { SurgipalLibPipe } from './src/surgipallib.pipe';
import { SurgipalLibComponent } from './src/surgipallib.component';
import { environment } from './src/environments/environment';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
export * from './src/models';
export * from './src/shared/components';
export * from './src/glove';
export * from './src/gown';
export * from './src/country';
export * from './src/speciality';
export * from './src/surgipallib.component';
export * from './src/surgipallib.directive';
export * from './src/surgipallib.pipe';
if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ParamDropdownComponent,
    SurgipalLibComponent,
    SurgipalLibDirective,
    SurgipalLibPipe

  ],
  exports: [
    ParamDropdownComponent,
    SurgipalLibComponent,
    SurgipalLibDirective,
    SurgipalLibPipe
  ],
  entryComponents: [SurgipalLibComponent]
})
export class SurgiDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SurgiDataModule,
      providers: [GloveService, GloveObservableService, GownService, CountryService, SpecialityService]
    };
  }
}
