import { utilService } from './utilService'

export const storageService = {
  query,
  getById,
  post,
  postMany,
  put,
  remove,
}

function query(entityType, delay = 0) {
  var entities = utilService.loadFromStorage(entityType) || []
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })
}

async function getById(entityType, entityId) {
  try {
    const entities = await query(entityType)
    return entities.find((entity) => entity._id === entityId)
  } catch (err) {
    console.error(err)
  }
}

async function post(entityType, newEntity) {
  try {
    newEntity._id = utilService.makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    utilService.saveToStorage(entityType, entities)
    return newEntity
  } catch (err) {
    console.error(err)
  }
}

async function postMany(entitiesType, entities) {
  try {
    utilService.saveToStorage(entitiesType, entities)
    return entitiesType
  } catch (err) {
    console.error(err)
  }
}

async function put(entityType, updatedEntity) {
  try {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    utilService.saveToStorage(entityType, entities)
    return updatedEntity
  } catch (err) {
    console.error(err)
  }
}

async function remove(entityType, entityId) {
  try {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity) => entity._id === entityId)
    if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
    entities.splice(idx, 1)
    utilService.saveToStorage(entityType, entities)
    return { msg: `entity with id: ${entityId} removed successfuly.` }
  } catch (err) {
    console.error(err)
  }
}
