import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[]=[
    {
      id:'1',
      title:'padkoda',
      imageUrl:'https://cdn.pixabay.com/photo/2021/04/29/07/36/lime-6215762_960_720.jpg',
      ingrediants:['nimbu,cd']
    },
    {
      id:'2',
      title:'padkogguda',
      imageUrl:'https://cdn.pixabay.com/photo/2021/04/29/07/36/lime-6215762_960_720.jpg',
      ingrediants:['nimbu,cd']
    }
  ];
  constructor() { }
getAllRecipes(){
  return[...this.recipes];
}
getRecipe(recipeId: string){
  return this.recipes.find(m =>  m.id === recipeId
  );
}


}
