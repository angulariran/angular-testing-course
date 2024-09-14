
export interface Food {
  id: number,
  titles: {
    description: string,
    "longDescription": string
  },
  image: string,
  category: string,
  url: string,
  recipeId: number
}

