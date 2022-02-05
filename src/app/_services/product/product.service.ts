import { EventEmitter } from "@angular/core";
import { Product } from "src/app/_models/Product/product.model";

export class ProductService{
    
    constructor(){
        
    }

    private productsArr:Product [] = 
    [
    {id:1, counter:1, name:"p1", price:100, discount:10, imageUrl:"https://picsum.photos/200/300"},
    {id:2, counter:1, name:"p2", price:200, discount:20, imageUrl:"https://picsum.photos/200/301"},
    {id:3, counter:1, name:"p3", price:300, discount:30, imageUrl:"https://picsum.photos/200/302"},
    {id:4, counter:1, name:"p4", price:400, discount:40, imageUrl:"https://picsum.photos/200/303"},
    {id:5, counter:1, name:"p5", price:500, discount:50, imageUrl:"https://picsum.photos/200/304"},
    {id:6, counter:1, name:"p6", price:600, discount:60, imageUrl:"https://picsum.photos/200/305"},
    {id:7, counter:1, name:"p7", price:700, discount:70, imageUrl:"https://picsum.photos/200/306"},
    {id:8, counter:1, name:"p8", price:800, discount:80, imageUrl:"https://picsum.photos/200/307"}
    ]

    private cartArr:Product[] = [];
    cartHasBeenChanged:EventEmitter<Product[]> = new EventEmitter<Product[]>();

    getAllProducts():Product[]{
        const copyOfProducts = [...this.productsArr];
        return copyOfProducts;
    }
    getCartItems():Product[]{
        const copyOfCartArr = [...this.cartArr];
        return copyOfCartArr;
    }
    getProductById(productId:number) {
        return this.productsArr.find(product=> product.id == productId);
    }
    addProduct(newProduct:Product){
        this.productsArr.push(newProduct)
    }
    updateProduct(productId:number, dataToUpdate:Product){
        const productToUpdate =  this.getProductById(productId);
        if(productToUpdate)
        {
            productToUpdate.name = dataToUpdate.name;
            productToUpdate.price = dataToUpdate.price;
            productToUpdate.discount = dataToUpdate.discount;
        }
    }
    deleteProduct(productToDelete:Product){
        this.productsArr.splice(this.productsArr.indexOf(productToDelete),1)
    }
    addItemToCart(addedItem:Product){
        if(!this.cartArr.includes(addedItem))
        { 
        this.cartArr.push(addedItem);
        }
        else addedItem.counter++; 
        this.cartHasBeenChanged.emit(this.cartArr);
    }
}