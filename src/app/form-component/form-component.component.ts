import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../_models/Product/product.model';
import { ProductService } from '../_services/product/product.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {

  constructor(private productService : ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  onAddProduct(form:any){
    console.log(form.value);
    const newProduct: Product = form.value;
    newProduct.counter = 1;
    this.productService.addProduct(newProduct);
    this.router.navigateByUrl("home");
  }
  
}
