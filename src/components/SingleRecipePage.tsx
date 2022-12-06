import { FC, useState, useEffect } from 'react'
import { IRecipe } from '../types/types'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const basicURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

interface SingleRecipePageAxios {
  meals: IRecipe[]
}

type SingleRecipePageParams = {
  id: string
}

const SingleRecipePage: FC = () => {
  const [recipe, setRecipe] = useState<IRecipe | null>(null)
  const { id } = useParams<SingleRecipePageParams>()

  useEffect(() => {
    fetchSingleRecipe()
  }, [])

  async function fetchSingleRecipe() {
    try {
      const response = await axios.get<SingleRecipePageAxios>(
        basicURL + `${id}`
      )
      const mealRecipe = response.data.meals[0]
      setRecipe(mealRecipe)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <img src={recipe?.strMealThumb} alt='recipe' />
      <h2>{recipe?.strMeal}</h2>
      <h3>{recipe?.strArea}</h3>
    </div>
  )
}

export default SingleRecipePage
