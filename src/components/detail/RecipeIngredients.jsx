export const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <h3 className="font-semibold font-serif text-xl mb-2 underline">Ingredients:</h3>
      <ul className="list-disc pl-4">
        {ingredients.map((i, idx) => (
          <li key={idx}>
            {i.quantity} {i.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
