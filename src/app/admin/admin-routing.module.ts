import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {RegisterCategoryComponent} from "./register-category/register-category.component";
import {CallListComponent} from "./call-list/call-list.component";
import {ConfigurationComponent} from "./configuration/configuration.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: '', component: RegisterCategoryComponent},
      {path: 'cadastra-categoria', component: RegisterCategoryComponent},
      {path: 'chamados', component: CallListComponent},
      {path: 'configuracoes', component: ConfigurationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
