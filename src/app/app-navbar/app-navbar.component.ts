import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_models/Product/product.model';
import { ProductService } from '../_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  // @Input() 
  addToCartItems:Product[] = [];
  dropdownList = false;
  
  constructor(private productService:ProductService) {}

  getCounter():number{
    return this.addToCartItems.length;
  }
  
  removeItem(itemToDelete:Product){ 
    itemToDelete.counter =1;
    this.addToCartItems.splice(this.addToCartItems.indexOf(itemToDelete),1)
  }
  
  getTotalCost():number{
      let cost = 0
      this.addToCartItems.forEach(product=>{
        cost += product.price*product.counter;
      })
      return cost;
  }


  ngOnInit(): void {
    this.productService.cartHasBeenChanged.subscribe(
      (res)=>{
        this.addToCartItems = res;
      },
      (err)=>{},
      ()=>{}
    )
  }

}
