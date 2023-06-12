import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {HomepageModule} from "./homepage/homepage.module";
import {ShopModule} from "./shop/shop.module";
import {CpuModule} from "./cpu/cpu.module";
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    HomepageModule,
    CpuModule,
    ShopModule,
    RouterOutlet,
    RouterLink,
    UserRoutingModule
  ]
})
export class UserModule { }
