import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {MaterializeModule} from "angular2-materialize";
import {CoreModule} from "./core";
import {SharedModule} from "./shared/shared.module";
import { IndexComponent } from './core/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterializeModule,
    CoreModule, SharedModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
