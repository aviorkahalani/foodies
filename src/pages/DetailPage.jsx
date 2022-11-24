import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeInfo } from '../components/detail/RecipeInfo'
import { RecipeIngredients } from '../components/detail/RecipeIngredients'
import { RecipeSteps } from '../components/detail/RecipeSteps'
import { RecipeThumbnails } from '../components/detail/RecipeThumbnails'
import { foodService } from '../services/foodService'

export const DetailPage = () => {
  const [recipe, setRecipe] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    loadRecipe(id)
  }, [])

  const loadRecipe = async (id) => {
    const recipe = await foodService.getById(id)
    setRecipe(recipe)
  }

  if (!recipe) return <div className="loader page">Loading...</div>

  return (
    <section className="page">
      <RecipeInfo name={recipe.name} imageURL={recipe.imageURL} />
      <RecipeThumbnails
        preparationTime={recipe.preparationTime}
        category={recipe.category}
        level={recipe.level}
      />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeSteps steps={recipe.steps} />
    </section>
  )
}
