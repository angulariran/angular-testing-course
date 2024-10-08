import db from '../../../db.json'

 export function findFoodForRecipe(recipeId: number) {
  return Object.values(db.foods).filter(food => food.recipeId === recipeId).reverse();
}
