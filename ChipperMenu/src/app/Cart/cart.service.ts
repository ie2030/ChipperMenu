import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Item } from '../Item/item';
import { Cart } from './cart';
import { SpecialItemService } from '../SpecialItem/specialitem.service';
import { SpecialItem } from '../SpecialItem/specialitem';

@Injectable()
export class CartService {

    // Observable string sources
    private addToCartCallSource = new Subject<any>();
    private removeItemCallSource = new Subject<any>();
  
    // Observable string streams
    addToCartCalled$ = this.addToCartCallSource.asObservable();
    removeItemCalled$ = this.removeItemCallSource.asObservable();

    // Service message commands
    addToCart( newItem: Item ) {
        this.addToCartCallSource.next(newItem);
    }

    removeItem( item: Item ) {
        this.removeItemCallSource.next(item);
    }

    dayStringtoNumber: Object = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6
    }

    d: Date = new Date; 

    constructor ( private specialItemService: SpecialItemService ) {
        for (var item of this.specialItems) {
            if (this.dayStringtoNumber[item.day] === this.d.getDay()) {
                this.todaysItems = item.items;
                this.todaysSpecialItem = item;
            }
        }
    }

    private specialItems: SpecialItem[] = this.specialItemService.getSpecialItems(); 
    private todaysSpecialItem: SpecialItem;
    private todaysItems: Item[] = [];  

    arrayObjectIndexOf(myArray, searchTerm, property) {
        for(var i = 0, len = myArray.length; i < len; i++) {
            if (myArray[i][property] === searchTerm) {
                return i;
            }
        }
        return -1;
    }

    checkArrays(my, compare) {
        var self = this;
        var temp = my.slice(0);
        return compare.every(function(val) {
            var index = self.arrayObjectIndexOf(temp, val.name, "name");
            if (index !== -1) {
                temp.splice(index, 1);
                return true;
            } else {
                return false;
            }
        })
    }

    checkCart(cart: Cart, totalPrice: number) {
        var self = this;

        // Check against today's deal
        if (self.checkArrays( cart.items_in_cart, this.todaysItems )) {
            var priceOfCartItems: number = 0;

            for (var item of this.todaysItems) {
                priceOfCartItems += item.price;
                var returnValues = this.removeItemFromCart(item, cart, totalPrice)
                totalPrice = returnValues.newPrice;
                cart = returnValues.newCart
            }
            self.addItem(self.mapSpecialItemtoItem(this.todaysSpecialItem), totalPrice, cart);

            alert("The items in your cart match the items in today's special - " + this.todaysSpecialItem.day + ": " + this.todaysSpecialItem.items_name
                + ". We took the liberty of putting it in your cart for you saving: \u20AC" + ( priceOfCartItems - this.todaysSpecialItem.price ).toFixed(2));
        }

        // Check against Every Day meal
        
        if (self.checkArrays ( cart.items_in_cart, this.specialItems[6].items )) {
            var priceOfCartItems: number = 0;

            for (var item of this.specialItems[6].items) {
                priceOfCartItems += item.price;
                self.removeItem(item);
            }
            self.addItem(self.mapSpecialItemtoItem(this.specialItems[6]), totalPrice, cart);

            alert("The items in your cart match the items in today's special: " + this.specialItems[6].day + ": " + this.specialItems[6].items_name
                + ". We took the liberty of putting it in your cart for you saving: \u20AC" + ( priceOfCartItems - this.specialItems[6].price ).toFixed(2));
        }

        return {
            newPrice: totalPrice,
            newCart: cart
        };
    }  

    mapSpecialItemtoItem = function (specialItem: SpecialItem) : Item {
        var newCartItem: Item = {
            name: specialItem.day + " Special: " + specialItem.items_name,
            price: specialItem.price
        };
        return newCartItem;
    }



    addItem (item: Item, totalPrice: number, cart: Cart) {
        totalPrice += item.price;
        cart.items_in_cart.push(item);
        this.checkCart(cart, totalPrice);
        return {
            newPrice: totalPrice,
            newCart: cart
        }
    }

    removeItemFromCart (item: Item, cart: Cart, totalPrice: number) {
        var myIndex = this.arrayObjectIndexOf(cart.items_in_cart, item.name, "name");
        totalPrice -= item.price;
        cart.items_in_cart.splice(myIndex, 1);
        return {
            newPrice: totalPrice,
            newCart: cart
        }
    }
}