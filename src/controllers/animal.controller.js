// Services
import AnimalService from "../services/animal.service.js";

// Utils
import { validateId, validateAnimal } from "../utils/validators.js";

async function createAnimal(req, res, next) {
  const animal = req.body;

  try {
    validateAnimal(animal);

    res.send(await AnimalService.createAnimal(animal));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listAnimais(req, res, next) {
  const { proprietarioId } = req.query;

  try {
    res.send(await AnimalService.listAnimais(proprietarioId));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  const { animalId } = req.params;

  try {
    validateId(animalId, "Animal");

    res.send(await AnimalService.getAnimal(animalId));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  const { animalId } = req.params;

  try {
    validateId(animalId, "Animal");

    await AnimalService.deleteAnimal(animalId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  const { animalId } = req.params;
  const animal = req.body;

  try {
    validateId(animalId, "Animal");

    res.send(await AnimalService.updateAnimal(animalId, animal));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  listAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
