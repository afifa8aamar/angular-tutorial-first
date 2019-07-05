import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items ;
  checkoutForm;
  constructor(private CartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.CartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    })
  }

  onSubmit(customerData) {
    console.warn("Your order has been submitted" , customerData);
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

  setDefault () {
    this.checkoutForm.get('name').setValue("John Boe");
    this.checkoutForm.get('address').setValue("Tbilisi");
  }

  deleteItem(product) {
    for (let item of this.items) {
        if (product == item) {
            this.items.slice(this.items.indexOf(item),1);
            window.alert(item + ` has been Deleted from cart`)
        }
    }      
}
}
