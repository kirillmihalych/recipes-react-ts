import axios from 'axios'
import { FC, useState, useEffect } from 'react'
import { IRecipe, IRecipes } from '../types/types'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const RecipesPage: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  useEffect(() => {
    fetchRecipes()
  }, [])

  async function fetchRecipes() {
    try {
      const response = await axios.get<IRecipes>(url)
      setRecipes(response.data.meals)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {recipes.map((recipe) => {
        return <h2 key={recipe.idMeal}>{recipe.strMeal}</h2>
      })}
    </div>
  )
}

export default RecipesPage
