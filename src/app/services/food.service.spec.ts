import {FoodService} from "./food.service";
import {TestBed} from "@angular/core/testing";
import { HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {HttpErrorResponse, provideHttpClient} from "@angular/common/http";
import db from '../../../db.json';
import {Food} from "../data/model/food";
import {findFoodForRecipe} from "../data/data-haandling";


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

  it('should save food',()=>{
    const changes:Partial<Food> = {titles:{description:"testing food"}};
    foodService.saveFood(2,changes)
      .subscribe(food=>{
        expect(food.id).toBe('2');
      });
    const req=httpClientTestingController.expectOne('http://localhost:3000/foods/2');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body.titles.description).toEqual(changes.titles?.description);
    req.flush({...changes,id:"2"})
  });

  it('should give an error if save course fails',()=>{
    const changes:Partial<Food> = {titles:{description:"testing food"}};
    // foodService.saveFood(2,changes)
    //   .subscribe(()=>fail("the save food operation should have failed"),
    //     (error:HttpErrorResponse)=>
    //   expect(error.status).toBe(500));
    foodService.saveFood(2,changes)
      .subscribe({next:()=>fail("the save food operation should have failed"),
        error:(error:HttpErrorResponse)=>
          expect(error.status).toBe(500)});
    const req=httpClientTestingController.expectOne('http://localhost:3000/foods/2');
    expect(req.request.method).toEqual('PUT');

    req.flush('Save course fails',{status:500,statusText:'Internal Server Error'});

  });

  it('should find a list of foods',()=>{
    foodService.findRecipeFoods(1)
      .subscribe(foods=>{
        expect(foods).toBeTruthy();
        expect(foods.length).toBe(3)
      })
    const req=httpClientTestingController.expectOne(req=>req.url==="http://localhost:3000/foods");
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('recipeId')).toEqual('1');
    expect(req.request.params.get('_sort')).toEqual('-id');
    expect(req.request.params.get('_page')).toEqual('0');
    expect(req.request.params.get('_per_page')).toEqual('3');
    req.flush(findFoodForRecipe(1))
  })



  afterEach(()=>{
    httpClientTestingController.verify();
  })


})
