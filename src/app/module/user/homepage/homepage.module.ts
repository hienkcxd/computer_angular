import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    MainHomepageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
