import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpuShopComponent } from './cpu-shop/cpu-shop.component';
import { CpuDetailComponent } from './cpu-detail/cpu-detail.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { CpuIntelComponent } from './cpu-intel/cpu-intel.component';
import { CpuAmdComponent } from './cpu-amd/cpu-amd.component';



@NgModule({
  declarations: [
    CpuShopComponent,
    CpuDetailComponent,
    CpuIntelComponent,
    CpuAmdComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class CpuModule { }
