import {Component, inject, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {FoodCardListComponent} from "../food-card-list/food-card-list.component";
import {RecipeCardListComponent} from "../recipe-card-list/recipe-card-list.component";
import {Food} from "../data/model/food";
import {Recipe} from "../data/model/recipe";
import {Observable} from "rxjs";
import {FoodService} from "../data/food.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    FoodCardListComponent,
    RecipeCardListComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  foods$!:Observable<Food[]>;
  recipes$!:Observable<Recipe[]>;

  private readonly _foodService=inject(FoodService)


  ngOnInit(): void {
    this.foods$=this._foodService.findAllFoods();
  }
}
