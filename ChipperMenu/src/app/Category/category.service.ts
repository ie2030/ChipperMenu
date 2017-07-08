import { Injectable } from '@angular/core';
import { Category } from './category';
import { Item } from '../Item/item';

@Injectable()
export class CategoryService {

    getCategories(): Category[] {

        var chips: Category = {
            name: "Chips",
            img_url: "/assets/fries.jpg",
            itemList: [
                {name: "Small Chips", price: 2.50},
                {name: "Large Chips", price: 3.00},
                {name: "Family Box of Chips", price: 7.00}
            ]
        }

        var sausages: Category = {
            name: "Sausages",
            img_url: "/assets/sausage.jpg",
            itemList: [
                {name: "Plain Sausage", price: 0.50},
                {name: "Large Sausage", price: 1.00},
                {name: "Battered Sausage", price: 1.50}
            ]
        }

        var burgers: Category = {
            name: "Burgers",
            img_url: "/assets/cheese_burger.jpg",
            itemList: [
                {name: "Plain Burger", price: 2.50},
                {name: "Cheese Burger", price: 3.00},
                {name: "Double Cheese Burger", price: 3.50},
                {name: "1/4 Pounder", price: 4.00},
                {name: "1/4 Pounder with Cheese", price: 4.50}
            ]
        }

        var chicken: Category = {
            name: "Chicken",
            img_url: "/assets/chicken.jpg",
            itemList: [
                {name: "Chicken Pieces", price: 2.00},
                {name: "Six Nuggets", price: 3.00},
                {name: "Eight Nuggets", price: 3.50},
                {name: "Ten Nuggets", price: 4.00},
                {name: "Chicken Fillet Burger", price: 4.00},
                {name: "Snack Box: 2 Pieces of Chicken", price: 6.00}
            ]
        }

        var fish: Category = {
            name: "Fish",
            img_url: "/assets/fish.jpg",
            itemList: [
                {name: "Cod", price: 3.00},
                {name: "Haddock", price: 3.50},
                {name: "Plaice", price: 4.00},
                {name: "Fish Box: Plaice and Chips", price: 7.00}
            ]
        }
        
        var drinks: Category = {
            name: "Drinks",
            img_url: "/assets/drinks.jpg",
            itemList: [
                {name: "Can 0.33L", price: 1.10},
                {name: "Bottle: 0.5L", price: 1.30}
            ]
        }

        return [chips, sausages, burgers, chicken, fish, drinks]
    }

}

// Images courtesy of http://www.freefoodphotos.com/imagelicense.html