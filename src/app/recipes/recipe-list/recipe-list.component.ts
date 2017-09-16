import { Component, OnInit } from '@angular/core';
import  {Recipe} from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[] = [new Recipe("A test recipe", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"),
                        new Recipe("Another recipe" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHxhb3lf7AkCwS8P-fLcDsJDWAFQg0tsW8FC4UVT5RQ2btMN9")
];
  constructor() { }

  ngOnInit() {
  }

}
