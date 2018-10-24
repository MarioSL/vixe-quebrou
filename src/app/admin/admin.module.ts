import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RegisterCategoryComponent} from "./register-category/register-category.component";
import {FormCategoryComponent} from "./register-category/form-category/form-category.component";
import {ItemCategoryComponent} from "./register-category/item-category/item-category.component";
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule, SharedModule, AdminRoutingModule
  ],
  declarations: [
    RegisterCategoryComponent,
    FormCategoryComponent,
    ItemCategoryComponent,
    AdminComponent]
})
export class AdminModule {
}
