import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WishlistService {
    items = [];
    constructor() { }
    addToWishlist(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearWishlist() {
        this.items = [];
        return this.items;
    }

    RemoveFromWishlist(product) {
        this.items.splice(this.items.indexOf(product), 1);
        return this.items;
    }

}