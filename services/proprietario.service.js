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

async function getProprietario(proprietario_id) {
  return await ProprietarioRepository.getProprietario(proprietario_id);
}

async function deleteProprietario(proprietario_id) {
  const animais = await AnimalRepository.listAnimaisByProprietarioId(
    proprietario_id
  );
  if (animais.length > 0) {
    const error = errorHandler(
      405,
      `Não é possível excluir um proprietário que possui um ou mais animais.`
    );
    throw error;
  }

  await ProprietarioRepository.deleteProprietario(proprietario_id);
}

async function updateProprietario(proprietario_id, proprietario) {
  const { nome, telefone } = await ProprietarioRepository.getProprietario(
    proprietario_id
  );

  return await ProprietarioRepository.updateProprietario({
    proprietario_id,
    nome: proprietario.nome ?? nome,
    telefone: proprietario.tipo ?? telefone,
  });
}

export default {
  createProprietario,
  listProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
