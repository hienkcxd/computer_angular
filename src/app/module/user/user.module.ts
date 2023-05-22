import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }
