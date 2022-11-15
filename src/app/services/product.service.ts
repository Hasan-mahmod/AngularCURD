import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductUrls } from '../utils/urls.const';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){ }
  public getAllproduct(queryParams:Map<string,any>): Observable<any>{
    let params=new HttpParams;
    params=params.append('offset',queryParams.get('offset'));
    params=params.append('limit',queryParams.get('limit'));
    return this.http.get(ProductUrls.get_all_product,{params:params});
  }
  public addProduct(queryParams: Map<string, any>): Observable<any> {
    return this.http.post(ProductUrls.ADD_PRODUCT, queryParams.get('product'));
  }
}
