import axios from 'axios'
import { FC, useState, useEffect } from 'react'
import { IRecipe, IRecipes } from '../types/types'
import List from './List'
import RecipeItem from './RecipeItem'

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
    <section className='recipes-list'>
      <List
        items={recipes}
        renderItem={(recipe: IRecipe) => (
          <RecipeItem recipe={recipe} key={recipe.idMeal} />
        )}
      />
    </section>
  )
}

export default RecipesPage
