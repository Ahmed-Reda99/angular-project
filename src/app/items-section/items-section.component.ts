import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../_models/Product/product.model';
import { ProductService } from '../_services/product/product.service';

@Component({
  selector: 'app-items-section',
  templateUrl: './items-section.component.html',
  styleUrls: ['./items-section.component.scss']
})
export class ItemsSectionComponent implements OnInit {
  
  productsArr:Product [];
  @Output() passItemEvent:EventEmitter<Product> = new EventEmitter();
  

  constructor(private productService:ProductService) { 
    this.productsArr = this.productService.getAllProducts();
  }

  
  // addToCart(addedItem:Product)
  // {
  //   console.log(addedItem);
  //   this.passItemEvent.emit(addedItem)
    
  // }


  ngOnInit(): void {
  }

}
