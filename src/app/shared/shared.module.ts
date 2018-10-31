import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from "./title/title.component";
import {FormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";

@NgModule({
  imports: [
    CommonModule, FormsModule, MaterializeModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent, FormsModule, MaterializeModule]
})
export class SharedModule {
}
