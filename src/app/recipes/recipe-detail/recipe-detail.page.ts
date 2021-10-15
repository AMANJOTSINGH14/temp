import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
detailRecipe: Recipe;
  constructor(private route: ActivatedRoute,private router: Router,private service: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para=>{
if(!para.has('recipedetail')){
this.router.navigate(['/recipe']);
}
const recipe=para.get('recipedetail');
this.detailRecipe=this.service.getRecipe(recipe);
    }
    );
  }

}
