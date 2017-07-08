import { Component, Input } from '@angular/core';
import { Item } from './item';
import { CartService } from '../Cart/cart.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['../../css/bootstrap.min.css']
})
export class ItemComponent {
    @Input()
    item: Item;

    constructor(private cartService: CartService) {
    }

    addToCart = function () {
        this.cartService.addToCart( this.item );
    }
}