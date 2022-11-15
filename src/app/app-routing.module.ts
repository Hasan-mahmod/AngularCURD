import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AllproductComponent } from './modules/product/allproduct/allproduct.component';

const routes: Routes = [
  {path:'', pathMatch:'full' , component:AppComponent},
  {path:'product',loadChildren:()=>import('./modules/product/product.module').then(m=>m.ProductModule)},
  // {path:'pro',pathMatch:'full', component:AllproductComponent},
  {path:'**',pathMatch:'full', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
