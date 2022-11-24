import { FoodPreview } from './FoodPreview'

export const FoodList = ({ foods }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => (
        <FoodPreview key={food._id} food={food} />
      ))}
    </section>
  )
}
