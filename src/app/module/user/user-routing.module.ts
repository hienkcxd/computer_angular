import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./layout/main/main.component";
import {MainHomepageComponent} from "./homepage/main-homepage/main-homepage.component";
import {CpuShopComponent} from "./cpu/cpu-shop/cpu-shop.component";
import {CpuDetailComponent} from "./cpu/cpu-detail/cpu-detail.component";
import {CpuIntelComponent} from "./cpu/cpu-intel/cpu-intel.component";
import {CpuAmdComponent} from "./cpu/cpu-amd/cpu-amd.component";

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
      // {path: "shop",component:MainShopComponent, children:[
      //     {path: "", redirectTo: "shop", pathMatch: "full"},
      //     {path: "cpu", redirectTo: "shop", pathMatch: "full"},
      //   ]},
      {path: "cpu", children:[
          {path: "", component:CpuShopComponent},
          {path: "detail", component:CpuDetailComponent, pathMatch: "full"},
          {path: "intel", children:[
              {path: "", component:CpuIntelComponent},
              {path: "detail", component:CpuDetailComponent, pathMatch: "full"},
            ]},
          {path: "amd", children:[
              {path: "", component:CpuAmdComponent},
              {path: "detail", component:CpuDetailComponent, pathMatch: "full"},
            ]},
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
