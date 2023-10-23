import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  public searchTerm: string="";
  productList: any[] = [];

  constructor(private cartApi: CartService) {}

  ngOnInit(): void {
    this.cartApi.getProductsData().subscribe((res: any) => {
      this.totalItem = res.length;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartApi.search.next(this.searchTerm);
  }
}
