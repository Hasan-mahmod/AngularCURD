import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  product:Product=new Product();
  // productName = new FormControl('');
  // brandName=new FormControl('');
  // unitType=new FormControl('');
  // quantity=new FormControl('');
  // costPricePerUnit = new FormControl('');
  // sellingPricePerUnit=new FormControl('');
  // packagingCategory=new FormControl('');
  // unitPerPackage=new FormControl('');

  constructor(private pservice:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addproduct(){
    const params:Map<string,any>=new Map();
    console.log(this.product.productName)
    let productmodel={
      productName:this.product.productName,
     // brandName:this.product.brandName,
      unitType:this.product.unitType,
      quantity:this.product.quantity,
      costPricePerUnit:this.product.costPricePerUnit,
      sellingPricePerUnit:this.product.sellingPricePerUnit,
     // packagingCategory:this.product.packagingCategory,
     // unitPerPackage:this.product.unitPerPackage
    }
   
    console.log(productmodel)
    params.set("product",productmodel)
    this.pservice.addProduct(params).subscribe({
      next:(res)=>{
        if(res){
          console.log(res)
          this.router.navigateByUrl('/product/allproduct')
        }else{
          console.log("Product not added")
        }
      }
    })

  }
}
