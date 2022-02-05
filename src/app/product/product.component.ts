import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_models/Product/product.model';
import { ProductService } from '../_services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() item!:Product;
  // @Output() addedItemEvent:EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService : ProductService) {}

  addToCart(newItem:Product)
  {
    
    // this.addedItemEvent.emit(newItem)
    this.productService.addItemToCart(newItem);
  }

  fontSize = 3;

  ngOnInit(): void {
  }

}
