import { FC } from 'react'
import { IRecipe } from '../types/types'
import { Link } from 'react-router-dom'

interface RecipeItemProps {
  recipe: IRecipe
}

const RecipeItem: FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <div>
      <h2 className='recipe-title'>
        <Link to={`/recipes/${recipe.idMeal}`}>{recipe.strMeal}</Link>
      </h2>
    </div>
  )
}

export default RecipeItem
