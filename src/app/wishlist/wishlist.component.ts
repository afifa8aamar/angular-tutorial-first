import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items;
  constructor(private route: ActivatedRoute, private WishlistService: WishlistService) {
    this.items = this.WishlistService.getItems();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.WishlistService = this.WishlistService[+params.get('productId')];
    });
  }

  RemoveFromWishlist(product) {
    this.WishlistService.RemoveFromWishlist(product);
    this.items = this.WishlistService.getItems();
  }

  IsNotEmpty() {
    if (this.WishlistService.getItems().length > 0) {
      return true;
    } else {
      return false;
    }
  }
  clearWishlist() {
    this.WishlistService.clearWishlist();
    this.items = this.WishlistService.getItems();
  }
}
