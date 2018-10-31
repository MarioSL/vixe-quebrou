import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {OpenCallComponent} from './open-call/open-call.component';
import {MyCallsComponent} from './my-calls/my-calls.component';
import {MyPersonalDataComponent} from './my-personal-data/my-personal-data.component';
import {SharedModule} from "../shared/shared.module";
import { ItemCallComponent } from './my-calls/item-call/item-call.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, OpenCallComponent, MyCallsComponent, MyPersonalDataComponent, ItemCallComponent]
})
export class UserModule {
}
