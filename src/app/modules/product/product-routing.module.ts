import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {path:'',children:[
    {path:'', component:ProductComponent},
    {path:'allproduct', component:AllproductComponent},
    {path:'addproduct', component:AddproductComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
