import { storageService } from './storageService'
import foodDB from '../data/food.json'
import { utilService } from './utilService'

export const foodService = {
  query,
  getById,
}

const STORAGE_KEY = 'food_db'

async function query(filterBy = {}) {
  try {
    let foods = await storageService.query(STORAGE_KEY)
    if (!foods || !foods.length) await storageService.postMany(STORAGE_KEY, foodDB)

    let filteredFoods = foods
    if (filterBy.name) {
      filteredFoods = filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(filterBy.name.toLowerCase())
      )
    }

    return filteredFoods
  } catch (error) {
    console.error(error)
  }
}

async function getById() {}
