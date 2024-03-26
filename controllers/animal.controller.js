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
  const { proprietario_id } = req.query;

  try {
    res.send(await AnimalService.listAnimais(proprietario_id));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  const { animal_id } = req.params;

  try {
    validateId(animal_id, "Animal");

    res.send(await AnimalService.getAnimal(animal_id));
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  const { animal_id } = req.params;

  try {
    validateId(animal_id, "Animal");

    await AnimalService.deleteAnimal(animal_id);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  const { animal_id } = req.params;
  const animal = req.body;

  try {
    validateId(animal_id, "Animal");
    validateAnimal(animal);

    res.send(await AnimalService.updateAnimal(animal_id, animal));
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
