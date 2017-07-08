import { Component, Input } from '@angular/core';
import { SpecialItem } from './specialitem';
import { CartService } from '../Cart/cart.service';
import { Item } from '../Item/item';

@Component({
  selector: 'special-item',
  templateUrl: './specialitem.component.html',
  styleUrls: ['../../css/bootstrap.min.css', "specialitem.component.css"]
})

export class SpecialItemComponent {

    @Input()
    specialItem: SpecialItem;
    d: Date = new Date;

    dayStringtoNumber: Object = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6
    }

    constructor(private cartService: CartService) {
    }

    addToCart = function () {
        if (this.d.getDay() === this.dayStringtoNumber[this.specialItem.day] || this.specialItem.day === "Every Day") {
            var newItem: Item = this.cartService.mapSpecialItemtoItem(this.specialItem);
            this.cartService.addToCart( newItem );
        }
    }
}