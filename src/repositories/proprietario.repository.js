// Models
import Proprietario from "../models/proprietario.model.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function getProprietario(proprietarioId) {
  try {
    return await Proprietario.findByPk(proprietarioId, { raw: true });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function deleteProprietario(proprietarioId) {
  try {
    await Proprietario.destroy({
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

async function updateProprietario(proprietarioId, proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId,
      },
    });
    return await getProprietario(proprietarioId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  insertProprietario,
  listProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
