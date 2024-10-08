import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Food} from "../data/model/food";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) {

  }

  private get _getUrl(){
    return environment.apiUrl;
  }

  findFoodById(foodId:number):Observable<Food>{
    return this.http.get<Food>(`${this._getUrl}/foods/${foodId}`);
  }



  findAllFoods():Observable<Food[]>{
    // @ts-ignore
    return this.http.get<Food[]>(`http://localhost:3000/foods`)
  }

  saveFood(foodId:number, changes: Partial<Food>): Observable<Food> {
    return this.http.put<Food>(`${this._getUrl}/foods/${foodId}`, changes);
  }

  findRecipeFoods(
    recipeId:number, filter = '', sortOrder = '-id',
    pageNumber = 0, pageSize = 3):  Observable<Food[]> {
    return this.http.get(`${this._getUrl}/foods`, {
      params: new HttpParams()
        .set('recipeId', recipeId.toString())
        .set('_sort', sortOrder)
        .set('_page', pageNumber.toString())
        .set('_per_page', pageSize.toString())
    }) as Observable<Food[]>
  }

}
