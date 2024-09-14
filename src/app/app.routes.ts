import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {FoodComponent} from "./food/food.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'foods/:id',
    component: FoodComponent,

  },
  {
    path: "**",
    redirectTo: '/'
  }
];
