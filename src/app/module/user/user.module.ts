import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {HomepageModule} from "./homepage/homepage.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    HomepageModule,
    UserRoutingModule
  ]
})
export class UserModule { }
