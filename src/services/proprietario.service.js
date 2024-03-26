// Repositories
import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function listProprietarios() {
  return await ProprietarioRepository.listProprietarios();
}

async function getProprietario(proprietarioId) {
  return await ProprietarioRepository.getProprietario(proprietarioId);
}

async function deleteProprietario(proprietarioId) {
  const animais = await AnimalRepository.listAnimaisByProprietarioId(
    proprietarioId
  );
  if (animais.length > 0) {
    const error = errorHandler(
      405,
      `Não é possível excluir um proprietário que possui um ou mais animais.`
    );
    throw error;
  }

  await ProprietarioRepository.deleteProprietario(proprietarioId);
}

async function updateProprietario(proprietarioId, proprietario) {
  return await ProprietarioRepository.updateProprietario(
    proprietarioId,
    proprietario
  );
}

export default {
  createProprietario,
  listProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
