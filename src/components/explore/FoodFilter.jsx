import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const FoodFilter = ({ onSetFilter }) => {
  const [filterBy, setFilterBy] = useState({
    name: '',
    categories: {
      dairy: false,
      meat: false,
      pastry: false,
      vegetarian: false,
    },
  })

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      [field]: value,
    }))
  }

  const handleCheckboxChange = ({ target }) => {
    const { name } = target
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      categories: {
        ...prevFilterBy.categories,
        [name]: !prevFilterBy.categories[name],
      },
    }))
  }

  const onSubmitForm = (ev) => {
    ev.preventDefault()
    onSetFilter(filterBy)
  }

  return (
    <form onSubmit={onSubmitForm} className="flex flex-col gap-5 flex-1">
      <div>
        <h2 className="font-bold font-serif text-2xl">Filter Recipes</h2>
        <p className="text-sm text-gray-400">
          Check multiple boxes below to narrow down the results
        </p>
      </div>

      <div>
        <h3 className="font-bold font-serif text-lg">Search Titles</h3>
        <div className="flex items-center ">
          <input
            className="p-2 outline-none border-[1px]"
            type="text"
            placeholder="Enter keyword.."
            onChange={handleChange}
            value={filterBy.title}
            name="name"
          />
          <button className="p-3 text-white bg-black">
            <BsSearch />
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-bold font-serif text-lg">By Categories</h3>
        <div className="flex flex-col gap-2">
          {Object.keys(filterBy.categories).map((c, idx) => (
            <label key={idx} className="flex items-center gap-2" htmlFor={c}>
              <input type="checkbox" name={c} id={c} onChange={handleCheckboxChange} />
              {c}
            </label>
          ))}
        </div>
      </div>
    </form>
  )
}
