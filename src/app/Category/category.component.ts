import { Component, Input, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['../../css/bootstrap.min.css', './category.component.css']
})
export class CategoryComponent implements OnInit {

    @Input()
    category: Category;

    dropped: boolean;

    ngOnInit () {
        this.dropped = false;
    }

    toggleDropped () {
        this.dropped = !this.dropped;
    }
}