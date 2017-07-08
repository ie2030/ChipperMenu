import { Item } from '../Item/item';

export class Cart {
    items_in_cart: Item[];

    constructor () {
        this.items_in_cart = [];
    }

    addItem(newItem: Item) {
        this.items_in_cart.push(newItem);
    }
}