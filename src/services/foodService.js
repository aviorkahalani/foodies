import { storageService } from './storageService'

export const foodService = {
  query,
  getById,
}

const STORAGE_KEY = 'food_db'

async function query(filterBy = {}) {
  return await storageService.query(STORAGE_KEY)
}
