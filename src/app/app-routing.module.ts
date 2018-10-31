import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./core/index/index.component";
import {ErrorPageComponent} from "./core/error-page/error-page.component";

const routes: Routes = [
  {
    path: 'a',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'u',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    component: IndexComponent
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


