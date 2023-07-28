import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {LayoutModule} from "./layout/layout.module";
import {HomepageModule} from "./homepage/homepage.module";
import {ShopModule} from "./shop/shop.module";
import {CpuModule} from "./cpu/cpu.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CoolerModule} from "./cooler/cooler.module";
import {MonitorModule} from "./monitor/monitor.module";
import {RamModule} from "./ram/ram.module";
import {VgaModule} from "./vga/vga.module";
import {VoltageModule} from "./voltage/voltage.module";
import {MouseModule} from "./mouse/mouse.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutModule,
    HomepageModule,
    ShopModule,
    CoolerModule,
    CpuModule,
    MonitorModule,
    MouseModule,
    RamModule,
    VgaModule,
    VoltageModule,
    RouterOutlet,
    RouterLink,
    UserRoutingModule
  ]
})
export class UserModule { }
