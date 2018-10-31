import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from "angular2-materialize";
import {ErrorPageComponent} from './error-page/error-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ErrorPageComponent],
  exports: []
})
export class CoreModule {
}
