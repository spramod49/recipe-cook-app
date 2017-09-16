import { Component, OnInit } from '@angular/core';
import  {Ingredient} from "../shared/ingredient.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients:Ingredient[] = [
        new Ingredient("Potato" ,3),
        new Ingredient("Tomatoes" ,10),
        new Ingredient("Apples" ,10)

];
  constructor() { }

  ngOnInit() {
  }

}
