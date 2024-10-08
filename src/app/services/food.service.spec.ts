import {FoodService} from "./food.service";
import {TestBed} from "@angular/core/testing";
import { HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import { provideHttpClient} from "@angular/common/http";



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


})
