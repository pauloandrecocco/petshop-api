// Models
import Animal from "../models/animal.model.js";
import Proprietario from "../models/proprietario.model.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listAnimais() {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listAnimaisByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      where: {
        proprietarioId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getAnimal(animalId) {
  try {
    return await Animal.findByPk(animalId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteAnimal(animalId) {
  try {
    await Animal.destroy({
      where: {
        animalId,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updateAnimal(animalId, animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId,
      },
    });
    return await getAnimal(animalId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertAnimal,
  listAnimais,
  listAnimaisByProprietarioId,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
