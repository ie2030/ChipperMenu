import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CategoryComponent } from './Category/category.component';
import { ItemComponent } from "./Item/item.component";
import { CartComponent } from "./Cart/cart.component";
import { CartItemComponent } from "./CartItem/cartitem.component";
import { SpecialItemComponent } from "./SpecialItem/specialitem.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemComponent,
    CartComponent,
    CartItemComponent,
    SpecialItemComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
