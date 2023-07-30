import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoltageShopComponent } from './voltage-shop/voltage-shop.component';
import { VoltageDetailComponent } from './voltage-detail/voltage-detail.component';



@NgModule({
  declarations: [
    VoltageShopComponent,
    VoltageDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VoltageModule { }
