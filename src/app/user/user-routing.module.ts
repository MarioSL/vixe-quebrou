import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user.component";
import {OpenCallComponent} from "./open-call/open-call.component";
import {MyCallsComponent} from "./my-calls/my-calls.component";
import {MyPersonalDataComponent} from "./my-personal-data/my-personal-data.component";

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {path: '', component: OpenCallComponent},
      {path: 'novo-chamado', component: OpenCallComponent},
      {path: 'edita-chamado/:id', component: OpenCallComponent},
      {path: 'meus-chamados', component: MyCallsComponent},
      {path: 'remove-chamado/:id', component: MyCallsComponent},
      {path: 'meus-dados', component: MyPersonalDataComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
