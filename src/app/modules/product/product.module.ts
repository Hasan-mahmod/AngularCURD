import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent,
    AllproductComponent,
    AddproductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProductModule {
  constructor(){
    console.log('product module loaded')
  }
 }
