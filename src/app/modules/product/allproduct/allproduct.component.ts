import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DeleteProductComponent } from '../delete-product/delete-product.component';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {
offset:number=0;
limit:number=5;
pageSize=10;
productList!:any[];
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','selling','Action'];
dataSource:any

  constructor(private pservice:ProductService) { }

  ngOnInit(): void {
    this.getallproduct()
  }
  getallproduct(){
    
    const params:Map<string,any>=new Map();
    params.set('offset',this.offset)
    params.set('limit',this.pageSize)
    this.pservice.getAllproduct(params).subscribe({
      next:(res)=>{
        if(res){
          this.productList = res.body;
          console.log(this.productList)
        }else{
          console.log("Product empty")
        }
      }
    })

  }

DeleteProduct(product:any){
  alert(product.productName +" Deleted Success")
  console.log(product)
}

}
