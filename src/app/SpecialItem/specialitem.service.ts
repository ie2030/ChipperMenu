import { Injectable } from '@angular/core';
import { SpecialItem } from './specialitem';

@Injectable()
export class SpecialItemService {

    getSpecialItems(): SpecialItem[] {

        var monday: SpecialItem = {
            day: "Monday",
            price: 5.00,
            items_name: "1/4 Pounder with Cheese and Chips",
            items: [
                {name: "1/4 Pounder with Cheese", price: 4.50},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 7
        };

        var tuesday: SpecialItem = {
            day: "Tuesday",
            price: 5.00,
            items_name: "Chicken Fillet Burger and Chips",
            items: [
                {name: "Chicken Fillet Burger", price: 4.00},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 6.50
        };

        var  wednesday: SpecialItem = {
            day: "Wednesday",
            price: 5.00,
            items_name: "Snack Box: 2 Pieces of Chicken and Chips",
            items: [
                {name: "Snack Box: 2 Pieces of Chicken", price: 6.00},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 6.00
        };

        var thursday: SpecialItem = {
            day: "Thursday",
            price: 5.00,
            items_name: "Double Cheese Burger and Chips",
            items: [
                {name: "Double Cheese Burger", price: 3.50},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 6.00
        };
        
        var friday: SpecialItem = {
            day: "Friday",
            price: 6.00,
            items_name: "Fish Box: Plaice and Chips",
            items: [
                {name: "Fish Box: Plaice and Chips", price: 7.00}
            ],
            ad_hoc_price: 7.00
        };

        var saturday: SpecialItem = {
            day: "Saturday",
            price: 5.00,
            items_name: "6 Nuggets, 2 Plain Sausages and Chips",
            items: [
                {name: "Six Nuggets", price: 3.00},
                {name: "Plain Sausage", price: 0.50},
                {name: "Plain Sausage", price: 0.50},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 7.00
        };

        var everyday: SpecialItem = {
            day: "Every Day",
            price: 10.00,
            items_name: "2 Chips / 2 Hamburgers / 2 Plain Sausages / Six Nuggets",
            items: [
                {name: "Plain Burger", price: 2.50},
                {name: "Plain Burger", price: 2.50},
                {name: "Six Nuggets", price: 3.00},
                {name: "Plain Sausage", price: 0.50},
                {name: "Plain Sausage", price: 0.50},
                {name: "Small Chips", price: 2.50},
                {name: "Small Chips", price: 2.50}
            ],
            ad_hoc_price: 14.00
        }

        return [monday, tuesday, wednesday, thursday, friday, saturday, everyday]
    }

}