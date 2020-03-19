import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService : CartService,
    private formbuilder : FormBuilder,
  ) { 
    this.checkoutForm = this.formbuilder.group({
      name: '',
      address: '',
    })
   }

  ngOnInit() {
    this.items=this.cartService.getCart();
  }
  onSubmit(customerData){
    console.warn('your order has been submitted' ,customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}