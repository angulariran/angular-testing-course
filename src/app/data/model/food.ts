
export interface Food {
  id: string,
  titles: {
    description: string,
    longDescription?: string
  },
  image: string,
  category: string,
  url: string,
  recipeId: number
}

