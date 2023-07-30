import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorShopComponent } from './monitor-shop/monitor-shop.component';
import { MonitorDetailComponent } from './monitor-detail/monitor-detail.component';
import { MonitorInch24Component } from './monitor-inch24/monitor-inch24.component';
import { MonitorInch27Component } from './monitor-inch27/monitor-inch27.component';
import { MonitorInch32Component } from './monitor-inch32/monitor-inch32.component';



@NgModule({
  declarations: [
    MonitorShopComponent,
    MonitorDetailComponent,
    MonitorInch24Component,
    MonitorInch27Component,
    MonitorInch32Component
  ],
  imports: [
    CommonModule
  ]
})
export class MonitorModule { }
