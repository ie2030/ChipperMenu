import { Component, OnInit } from '@angular/core';
import { CategoryService } from './Category/category.service';
import { Category } from './Category/category';
import { CartService } from './Cart/cart.service';
import { SpecialItem } from './SpecialItem/specialitem';
import { SpecialItemService } from './SpecialItem/specialitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/bootstrap.min.css'],
  providers: [CategoryService, CartService, SpecialItemService]
})
export class AppComponent implements OnInit {

    categories: Category[];
    specialItems: SpecialItem[];
    standardMenuOn: boolean;
    menuStates: boolean[];
  
    constructor(private categoryService: CategoryService, private specialItemService: SpecialItemService) {
        this.standardMenuOn = true;
    }

    ngOnInit() {
        this.categories = this.categoryService.getCategories();
        this.specialItems = this.specialItemService.getSpecialItems();
        this.menuStates = [true, false];
    }
}
