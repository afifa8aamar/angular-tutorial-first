import { CartService } from './cart.service';

describe('Auth service tests', () => {
    let cartService;
    beforeEach(() => {
        cartService = new CartService();
    })

    it('Default items should be empty', () => {
        expect(cartService.users).toEqual([]);
    })

    it('Method addToCart should add to users', () => {
        let product = {
            name: 'Phone Standard',
            price: 299,
            description: ''
        }
        cartService.addToCart(product);
        expect(cartService.items).toContain(product);
    })

    it('Method getItems should return items', () => {
        expect(cartService.getItems()).toEqual(cartService.items);
    })

    // it('Method clearWishlist should make ithems empty', () => {
    //     wishList.clearWishlist();
    //     expect(wishList.clearWishlist()).toEqual([]);
    // })

    // it('Method RemoveFromWishlist should remove product from items', ()=> {
    //     let product = {
    //         name: 'Phone Standard',
    //         price: 299,
    //         description: ''
    //     }
    //     wishList.addToWishlist(product);
    //     wishList.RemoveFromWishlist(product);
    //     expect(wishList.getItems()).toEqual(wishList.items);
    // })  

})