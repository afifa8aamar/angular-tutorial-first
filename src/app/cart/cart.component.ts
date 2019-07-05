import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items ;

  constructor(private CartService: CartService) {
    this.items = this.CartService.getItems();
  }

  ngOnInit() {
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
