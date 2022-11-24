import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className="hero h-96 text-white flex flex-col items-center justify-start gap-5 pt-8 rounded-md drop-shadow-md text-center">
      <h1 className="text-xl lg:text-2xl font-semibold drop-shadow-md">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <button className="bg-amber-600 px-4 py-2 rounded">
        <Link to={'/explore'}>Explore now</Link>
      </button>
    </div>
  )
}
