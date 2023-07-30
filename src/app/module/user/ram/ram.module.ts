import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamGb8Component } from './ram-gb8/ram-gb8.component';
import { RamGb16Component } from './ram-gb16/ram-gb16.component';
import { RamShopComponent } from './ram-shop/ram-shop.component';
import { RamDetailComponent } from './ram-detail/ram-detail.component';



@NgModule({
  declarations: [
    RamGb8Component,
    RamGb16Component,
    RamShopComponent,
    RamDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RamModule { }
