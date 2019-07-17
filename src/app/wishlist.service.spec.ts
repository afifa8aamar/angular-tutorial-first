import { WishlistService } from './wishlist.service';
describe('Auth service tests', () => {
    let wishList;
    beforeEach(() => {
        wishList = new WishlistService();
    })

    it('Default items should be empty', () => {
        expect(wishList.items).toEqual([]);
    })

    it('Method addToWishlist should add to items', () => {
        let product = {
            name: 'Phone Standard',
            price: 299,
            description: ''
        }
        wishList.addToWishlist(product);
        expect(wishList.items).toContain(product)
    })

    it('Method getItems should return items', () => {
        expect(wishList.getItems()).toEqual(wishList.items);
    })

    it('Method clearWishlist should make ithems empty', () => {
        wishList.clearWishlist();
        expect(wishList.clearWishlist()).toEqual([]);
    })

    it('Method RemoveFromWishlist should remove product from items', ()=> {
        let product = {
            name: 'Phone Standard',
            price: 299,
            description: ''
        }
        wishList.addToWishlist(product);
        wishList.RemoveFromWishlist(product);
        expect(wishList.getItems()).toEqual(wishList.items);
    })  

})