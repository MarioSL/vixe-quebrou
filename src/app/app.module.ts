import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MaterializeModule } from "angular2-materialize";
import { TitleComponent } from "./register-category/title/title.component";
import { RegisterCategoryComponent } from "./register-category/register-category.component";
import { FormCategoryComponent } from "./register-category/form-category/form-category.component";
import { ItemCategoryComponent } from "./register-category/item-category/item-category.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    RegisterCategoryComponent,
    FormCategoryComponent,
    ItemCategoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterializeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
