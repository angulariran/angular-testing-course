import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "./model/food";
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
    return this.http.get<Food[]>(`${this._getUrl}/foods`);
  }
}
