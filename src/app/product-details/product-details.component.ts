import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'


import { products } from '../products';
import { CartService } from '../cart.service'
import { WishlistService } from '../wishlist.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private CartServise: CartService, private WishlistService : WishlistService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert("Your product has been added to the cart")
    this.CartServise.addToCart(product);
  }

  isAdded(product) {
    return this.CartServise.getItems().includes(product)
  }

  addToWishlist(product) {
    window.alert("Your product has been added to wishlist")
    this.WishlistService.addToWishlist(product);
  }

}