export const RecipeSteps = ({ steps }) => {
  return (
    <div>
      <h3 className="font-semibold font-serif text-xl mb-2 underline">Steps:</h3>
      <ul className="list-decimal pl-4">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  )
}
