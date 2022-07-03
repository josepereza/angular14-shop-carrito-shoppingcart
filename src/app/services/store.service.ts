import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private myCart=new Subject<Product[]>();
myCart$=this.myCart.asObservable();
myList:Product[]=[]
total:number=0
  constructor() { }

  addProduct(product: Product) {
    this.myList.push(product);
    this.total=this.total+product.price
    this.myCart.next(this.myList);
  }
}
