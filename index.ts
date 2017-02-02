import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurgiPalComponent} from './src/sample.component';
import {SampleDirective} from './src/sample.directive';
import {SamplePipe} from './src/sample.pipe';
import {SampleService} from './src/sample.service';
import 'rxjs/Rx';
export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/sample.service';
export * from './src/models';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SurgiPalComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SurgiPalComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
