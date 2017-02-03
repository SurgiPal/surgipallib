import { NgModule, ModuleWithProviders, enableProdMode} from '@angular/core';
import {  GloveService, GloveComponent } from './src/glove';
import {  GownService, GownComponent } from './src/gown';
import {  CountryService } from './src/country';
import {  SpecialityService } from './src/speciality';
import { ParamDropdownComponent } from './src/shared/components';
import { CommonModule } from '@angular/common';
import { SampleDirective } from './src/sample.directive';
import { SamplePipe } from './src/sample.pipe';
import { environment } from './src/environments/environment';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
export * from './src/models';
export * from './src/shared/components';
export * from './src/glove';
export * from './src/gown';
export * from './src/country';
export * from './src/speciality';
export * from './src/sample.directive';
export * from './src/sample.pipe';
if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ParamDropdownComponent,
    GownComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    ParamDropdownComponent, GownComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SurgiDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SurgiDataModule,
      providers: [GloveService, GownService, CountryService, SpecialityService]
    };
  }
}
