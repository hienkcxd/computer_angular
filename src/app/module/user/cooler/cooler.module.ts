import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolerShopComponent } from './cooler-shop/cooler-shop.component';
import { CoolerDetailComponent } from './cooler-detail/cooler-detail.component';
import { CoolerFanComponent } from './cooler-fan/cooler-fan.component';
import { CoolerAirComponent } from './cooler-air/cooler-air.component';
import { CoolerLiquidComponent } from './cooler-liquid/cooler-liquid.component';



@NgModule({
  declarations: [
    CoolerShopComponent,
    CoolerDetailComponent,
    CoolerFanComponent,
    CoolerAirComponent,
    CoolerLiquidComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoolerModule { }
