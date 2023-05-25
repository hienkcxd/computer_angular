import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./layout/main/main.component";
import {MainHomepageComponent} from "./homepage/main-homepage/main-homepage.component";
import {MainShopComponent} from "./shop/main-shop/main-shop.component";

const routes: Routes = [
  {path:"", redirectTo: "user/homepage", pathMatch: "full"},
  {path:"user", component: MainComponent,
    // canActivate: [AuthGuard],
    // canActivateChild:[RoleUserGuard],
    children:[
      {path: "", redirectTo: "homepage", pathMatch: "full"},
      {path: "homepage",component:MainHomepageComponent, children:[
          {path: "", redirectTo: "homepage", pathMatch: "full"},
      ]},
      {path: "shop",component:MainShopComponent, children:[
          {path: "", redirectTo: "shop", pathMatch: "full"},
          {path: "cpu", redirectTo: "shop", pathMatch: "full"},
        ]},
    ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
