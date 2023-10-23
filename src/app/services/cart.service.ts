import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartDataList : any=[]
  public productList=new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  


  constructor() { }
  getProductsData(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartDataList.push(...product)
    this.productList.next(product)
  }
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalPrice();
  }
  getTotalPrice(){
    let grandTotal:number=0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
    })
  }
  removeCartItem(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList);
  }

  removeAllCart(){
    this.cartDataList=[]
    this.productList.next(this.cartDataList)
  }
}
