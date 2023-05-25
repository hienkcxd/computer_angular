import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {HomepageModule} from "./homepage/homepage.module";
import {ShopModule} from "./shop/shop.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    HomepageModule,
    ShopModule,
    UserRoutingModule
  ]
})
export class UserModule { }
