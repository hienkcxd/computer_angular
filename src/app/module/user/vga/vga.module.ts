import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgaRxComponent } from './vga-rx/vga-rx.component';
import { VgaRtxComponent } from './vga-rtx/vga-rtx.component';
import { VgaDetailComponent } from './vga-detail/vga-detail.component';
import { VgaShopComponent } from './vga-shop/vga-shop.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    VgaRxComponent,
    VgaRtxComponent,
    VgaDetailComponent,
    VgaShopComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class VgaModule { }
