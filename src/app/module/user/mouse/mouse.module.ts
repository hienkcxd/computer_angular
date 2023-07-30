import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseShopComponent } from './mouse-shop/mouse-shop.component';
import { MouseDetailComponent } from './mouse-detail/mouse-detail.component';
import { MouseWireComponent } from './mouse-wire/mouse-wire.component';
import { MouseBluetoothComponent } from './mouse-bluetooth/mouse-bluetooth.component';



@NgModule({
  declarations: [
    MouseShopComponent,
    MouseDetailComponent,
    MouseWireComponent,
    MouseBluetoothComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MouseModule { }
