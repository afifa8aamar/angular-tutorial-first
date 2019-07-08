import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  constructor(private CartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.CartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    console.warn("Your order has been submitted", customerData);
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

  setDefault() {
    // this.checkoutForm.get('name').setValue("John Boe");
    // this.checkoutForm.get('address').setValue("Tbilisi");
    this.checkoutForm.patchValue({
      name: 'John Doe',
      address: 'Georgia'
    })
  }

  RemoveFromCart(product) {
    this.CartService.RemoveFromCart(product);
    this.items = this.CartService.getItems();
  }

  IsNotEmpty () {
    if (this.CartService.getItems().length > 0) {
      return true;
    } else {
      return false;
    }
  }
  clearCart() {
    this.CartService.clearCart();
    this.items = this.CartService.getItems();
  }
}
