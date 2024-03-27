// Models
import Animal from "../models/animal.model.js";
import Servico from "../models/servico.model.js";

// Repositories
import AnimalRepository from "../repositories/animal.repository.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listServicos() {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listServicosByProprietarioId(proprietarioId) {
  try {
    const animaisIds = (
      await AnimalRepository.listAnimaisByProprietarioId(proprietarioId)
    ).map((animal) => animal.animalId);

    return await Servico.findAll({
      where: {
        animalId: animaisIds,
      },
    });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertServico,
  listServicos,
  listServicosByProprietarioId,
};
