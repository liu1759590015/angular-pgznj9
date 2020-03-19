import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class CartService {
  items=[];
  constructor(
    private httpClient:HttpClient,
  ) { }
  addToCart(product){
    this.items.push(product);
    console.log("加入购物车"+this.items)
  }
  getCart(){
    console.log("购物车"+this.items)
    return this.items;
  }
  clearCart(){
    this.items=[];
  }
  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json')
  }
}