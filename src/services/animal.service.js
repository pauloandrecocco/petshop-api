// Repositories
import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function listAnimais(proprietarioId) {
  if (proprietarioId) {
    return await AnimalRepository.listAnimaisByProprietarioId(proprietarioId);
  }
  return await AnimalRepository.listAnimais();
}

async function getAnimal(animalId) {
  return await AnimalRepository.getAnimal(animalId);
}

async function deleteAnimal(animalId) {
  await AnimalRepository.deleteAnimal(animalId);
}

async function updateAnimal(animalId, animal) {
  return await AnimalRepository.updateAnimal(animalId, animal);
}

export default {
  createAnimal,
  listAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
