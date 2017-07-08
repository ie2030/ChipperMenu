import { Component, Input } from '@angular/core';
import { Item } from '../Item/item';
import { CartService } from '../Cart/cart.service';

@Component({
  selector: 'cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['../../css/bootstrap.min.css']
})
export class CartItemComponent {
    @Input()
    item: Item;

    constructor(private cartService: CartService) {}

    removeFromCart = function () {
        this.cartService.removeItem( this.item );
    }
}