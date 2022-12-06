import { FC } from 'react'
import { IRecipe } from '../types/types'

interface RecipeItemProps {
  recipe: IRecipe
}

const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.strMeal}</h3>
    </div>
  )
}

export default RecipeItem
