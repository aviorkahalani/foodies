import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const FoodFilter = ({ onSetFilter }) => {
  const [filterBy, setFilterBy] = useState({
    name: '',
  })

  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      [field]: value,
    }))
  }

  const onSubmitForm = (ev) => {
    ev.preventDefault()
    onSetFilter(filterBy)
  }

  return (
    <form onSubmit={onSubmitForm} className="flex flex-col gap-3 flex-1">
      <div>
        <h2 className="font-bold font-serif text-2xl">Filter Recipes</h2>
        <p className="text-sm text-gray-400">
          Check multiple boxes below to narrow down the results
        </p>
      </div>

      {/* By Category */}

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
    </form>
  )
}
