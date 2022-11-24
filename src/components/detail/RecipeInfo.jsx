export const RecipeInfo = ({ name, imageURL }) => {
  return (
    <div>
      <h2 className="font-semibold font-serif text-3xl mb-2">{name}</h2>
      <img className="w-full rounded drop-shadow" src={imageURL} alt={name} />
    </div>
  )
}
