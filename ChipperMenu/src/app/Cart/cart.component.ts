import { Component, Input } from '@angular/core';
import { Cart } from './cart';
import { CartService } from './cart.service';
import { Item } from '../Item/item';
import { SpecialItemService } from '../SpecialItem/specialitem.service';
import { SpecialItem } from '../SpecialItem/specialitem';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../css/bootstrap.min.css']
})
export class CartComponent {
    @Input()
    cart: Cart;
    freeDrinkAdded: boolean = false;

    totalPrice: number = 0;

    constructor ( private cartService: CartService, private specialItemService: SpecialItemService ) {

        this.cart = new Cart;

        this.cartService.addToCartCalled$.subscribe(
            newItem => {
                this.addItem(newItem);
            }
        );

        this.cartService.removeItemCalled$.subscribe(
            item => {
                this.removeItem(item);
            }
        );
    }

    addItem(item: Item) {
        var returnValues = this.cartService.addItem(item, this.totalPrice, this.cart);
        this.totalPrice = returnValues.newPrice;
        this.cart = returnValues.newCart;
    }

    removeItem (item: Item) {
        var returnValues = this.cartService.removeItemFromCart(item, this.cart, this.totalPrice)
        this.totalPrice = returnValues.newPrice;
        this.cart = returnValues.newCart
    }

    addFreeDrink () {
        this.addItem({name: "Free Drink 0.33L", price: 0});
        this.freeDrinkAdded = true;
    }

}