import { BsHandThumbsUp, BsClock } from 'react-icons/bs'

export const FoodPreview = ({ food }) => {
  return (
    <article className="flex flex-col gap-1 drop-shadow-md cursor-pointer rounded-md overflow-hidden transition-all md:hover:scale-[102%]">
      <div className="thumbnail ">
        <img
          className="aspect-square object-cover w-full"
          src={food.imageURL}
          alt={food.name}
        />
      </div>
      <div className="uppercase text-xs text-gray-400 flex items-center gap-2">
        <span className="flex items-center gap-1">
          <BsClock /> {food.preparationTime} minutes
        </span>
        {food.level === 1 && (
          <span className="flex items-center gap-1">
            <BsHandThumbsUp />
            super easy!
          </span>
        )}
      </div>
      <div>
        <p className="font-bold">{food.name}</p>
      </div>
    </article>
  )
}
