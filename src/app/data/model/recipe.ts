export interface Recipe {
  id: string,
  name:string,
  materials: string[],
  preparationTime: number,
  image: string,
  category: string,
  url: string
}
