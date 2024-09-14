import {Component, input} from '@angular/core';
import {Food} from "../data/model/food";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-food-card-list',
  standalone: true,
  imports: [

    MatCardModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './food-card-list.component.html',
  styleUrl: './food-card-list.component.scss'
})
export class FoodCardListComponent {
  foods= input.required<Food[]>()
}
