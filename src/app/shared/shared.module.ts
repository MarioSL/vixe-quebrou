import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from "./title/title.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent, FormsModule]
})
export class SharedModule {
}
