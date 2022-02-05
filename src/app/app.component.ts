import { Component } from '@angular/core';
import { Product } from './_models/Product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lab1';

  // itemsToAdd:Product[] = [];

  // addToCart(addedItem:Product)
  // {
  //   // console.log(addedItem);
  //   // console.log(this.itemsToAdd);
  //   if(!this.itemsToAdd.includes(addedItem))
  //   { 
  //     this.itemsToAdd.push(addedItem);
  //   }
  //   else addedItem.counter++; 
    
  // }

}
