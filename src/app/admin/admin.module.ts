import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RegisterCategoryComponent} from "./register-category/register-category.component";
import {FormCategoryComponent} from "./register-category/form-category/form-category.component";
import {ItemCategoryComponent} from "./register-category/item-category/item-category.component";
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MaterializeModule} from "angular2-materialize";
import { CallListComponent } from './call-list/call-list.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, AdminRoutingModule
  ],
  declarations: [
    RegisterCategoryComponent,
    FormCategoryComponent,
    ItemCategoryComponent,
    AdminComponent,
    CallListComponent,
    ConfigurationComponent]
})
export class AdminModule {
}
