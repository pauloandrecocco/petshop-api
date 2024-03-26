// Repositories
import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function listAnimais(proprietario_id) {
  if (proprietario_id) {
    return await AnimalRepository.listAnimaisByProprietarioId(proprietario_id);
  }
  return await AnimalRepository.listAnimais();
}

async function getAnimal(animal_id) {
  return await AnimalRepository.getAnimal(animal_id);
}

async function deleteAnimal(animal_id) {
  await AnimalRepository.deleteAnimal(animal_id);
}

async function updateAnimal(animal_id, animal) {
  const { nome, tipo, proprietario_id } = await AnimalRepository.getAnimal(
    animal_id
  );

  return await AnimalRepository.updateAnimal({
    animal_id,
    nome: animal.nome ?? nome,
    tipo: animal.tipo ?? tipo,
    proprietario_id: animal.proprietario_id ?? proprietario_id,
  });
}

export default {
  createAnimal,
  listAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
