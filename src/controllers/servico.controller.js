// Services
import ServicoService from "../services/servico.service.js";

// Utils
import { validateServico } from "../utils/validators.js";

async function createServico(req, res, next) {
  const servico = req.body;

  try {
    validateServico(servico);

    res.send(await ServicoService.createServico(servico));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listServicos(req, res, next) {
  const { proprietarioId } = req.query;

  try {
    res.send(await ServicoService.listServicos(proprietarioId));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  listServicos,
};
