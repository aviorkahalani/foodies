import { BsClock, BsSquare, BsSliders } from 'react-icons/bs'
import { CiForkAndKnife } from 'react-icons/ci'

export const RecipeThumbnails = ({ preparationTime, category, level }) => {
  const levelStr = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
  }

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-5 place-content-start md:w-1/2 font-medium">
      <article className="flex flex-col items-center justify-center h-28 p-5 rounded drop-shadow bg-sky-300">
        <BsClock /> {preparationTime} mins.
      </article>
      <article className="flex flex-col items-center justify-center h-28 p-5 rounded drop-shadow bg-lime-300">
        <CiForkAndKnife /> {category}
      </article>
      <article className="flex flex-col items-center justify-center h-28 p-5 rounded drop-shadow bg-amber-300">
        <BsSliders /> {levelStr[level]}
      </article>
    </div>
  )
}
