import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  searchKey:string="";
  filterCategory:any;
  
  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory=res;

    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
    });
    this.cartService.search.subscribe(val=>{
      this.searchKey=val;
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  delete(id: string) {
    this.api.deleteData(id).subscribe((res: any) => {
      // Assuming you want to update the product list after deleting
      this.api.getProduct().subscribe((updatedRes: any) => {
        this.productList = updatedRes;
      });
      alert('Deleted Successfully');
    });
  }

  filter(Manufacturer:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.Manufacturer==Manufacturer||Manufacturer==''){
        return a;
      }
    })
  }
}
