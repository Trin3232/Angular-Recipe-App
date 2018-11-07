import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cakes App';
  recipes: Recipe[]
  constructor() {
    this.recipes = [{
      title :"Lemon Cake",
      image :"assets/images/lemon-cake.jpg",
      ingredientName :"",
      ingredientsList :["butter","sugar", "eggs", "flour","lemon"],
      quantity :0,
      unitOfMeasurement :"5g 65g 99g 31g 8g",
      method :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },{
      title :"Chocolate Cake",
      image :"assets/images/chocolate-cake.jpg",
      ingredientName :"",
      ingredientsList :["butter","sugar", "eggs", "flour","chocolate"],
      quantity :0,
      unitOfMeasurement :"123g 43g 78g 89g 6g",
      method :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
      title :"Carrot Cake",
      image :"assets/images/carrott-cake.jpeg",
      ingredientName :"",
      ingredientsList :["butter","sugar", "eggs", "flour","carrots"],
      quantity :0,
      unitOfMeasurement :"55g 34g 2g 89g 4g",
      method :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
      title :"Banana Cake",
      image :"assets/images/banana-cake.jpg",
      ingredientName :"",
      ingredientsList :["butter","sugar", "eggs", "flour","banana"],
      quantity :0,
      unitOfMeasurement :"225g 30g 5g 78g",
      method :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
      title :"Cheese Cake",
      image :"assets/images/cheese-cake.jpeg",
      ingredientName :"",
      ingredientsList :["butter","sugar", "eggs", "flour","soft-cheese"],
      quantity :0,
      unitOfMeasurement :"100g 34g 22g 9g",
      method :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }]
  }
}
