export interface IRecipes {
  meals: IRecipe[]
}

export interface IRecipe {
  idMeal: string
  strMeal: string
  strArea: string
  strMealThumb: string
}
