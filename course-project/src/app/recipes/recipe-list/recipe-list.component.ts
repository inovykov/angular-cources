import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is test", "https://www.eatwell101.com/wp-content/uploads/2017/03/baked-Garlic-Butter-Chicken-recipe.jpg")
  ];

  recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
