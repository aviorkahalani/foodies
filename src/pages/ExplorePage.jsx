import { useEffect, useState } from 'react'
import { FoodFilter } from '../components/explore/FoodFilter'
import { FoodList } from '../components/explore/FoodList'
import { foodService } from '../services/foodService'

export const ExplorePage = () => {
  const [foods, setFood] = useState(null)
  const [filterBy, setFilterBy] = useState({})

  useEffect(() => {
    loadFood()
  }, [filterBy])

  const loadFood = async () => {
    setFood(await foodService.query(filterBy))
  }

  const onSetFilter = (filterBy) => {
    setFilterBy(filterBy)
  }

  if (!foods) return <div className="loder page">Loading...</div>

  return (
    <section className="page md:flex-row gap-6">
      <FoodFilter onSetFilter={onSetFilter} />
      <FoodList foods={foods} />
    </section>
  )
}
