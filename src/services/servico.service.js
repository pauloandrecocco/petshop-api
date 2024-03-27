// Repositories
import ServicoRepository from "../repositories/servico.repository.js";

async function createServico(servico) {
  return await ServicoRepository.insertServico(servico);
}

async function listServicos(proprietarioId) {
  if (proprietarioId) {
    return await ServicoRepository.listServicosByProprietarioId(proprietarioId);
  }
  return await ServicoRepository.listServicos();
}

export default {
  createServico,
  listServicos,
};
