import {FoodService} from "./food.service";
import {TestBed} from "@angular/core/testing";
import { HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import { provideHttpClient} from "@angular/common/http";
import db from '../../../db.json';


describe('foodService', () => {
  let foodService:FoodService,
    httpClientTestingController:HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      // imports:[HttpClientTestingModule],
      providers:[provideHttpClient(),provideHttpClientTesting(),FoodService]
    });

    foodService=TestBed.inject(FoodService);
    httpClientTestingController=TestBed.inject(HttpTestingController);

  })
  it('should return foods',()=>{
    foodService.findAllFoods()
      .subscribe(foods=>{
        expect(foods).toBeTruthy();
        expect(foods.length).toBe(4);
        const food=foods.find(food=>+food.id===2);
        expect(food?.titles.description).toBe("meat-ball spaghetti")
      });
    const req=httpClientTestingController.expectOne('http://localhost:3000/foods');
    expect(req.request.method).toEqual('GET');
    req.flush(db.foods);

  });

  it('should return food by id',()=>{
    foodService.findFoodById(3)
      .subscribe(food=>{
        expect(food).toBeTruthy();
        expect(food.id).toBe('3');
      });
    const req = httpClientTestingController.expectOne('http://localhost:3000/foods/3');
    expect(req.request.method).toEqual('GET');
    req.flush(db.foods.find(food=>+food.id===3)!);

  });

})
