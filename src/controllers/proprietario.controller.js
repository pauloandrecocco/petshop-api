// Services
import ProprietarioService from "../services/proprietario.service.js";

// Utils
import { validateId, validateProprietario } from "../utils/validators.js";

async function createProprietario(req, res, next) {
  const proprietario = req.body;

  try {
    validateProprietario(proprietario);

    res.send(await ProprietarioService.createProprietario(proprietario));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.listProprietarios());
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  const { proprietarioId } = req.params;

  try {
    validateId(proprietarioId, "Proprietário");

    res.send(await ProprietarioService.getProprietario(proprietarioId));
    logger.info(`${req.method} ${req.baseUrl}/:proprietarioId - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(req, res, next) {
  const { proprietarioId } = req.params;

  try {
    validateId(proprietarioId, "Proprietário");

    await ProprietarioService.deleteProprietario(proprietarioId);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:proprietarioId - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  const { proprietarioId } = req.params;
  const proprietario = req.body;

  try {
    validateId(proprietarioId, "Proprietário");

    res.send(
      await ProprietarioService.updateProprietario(proprietarioId, proprietario)
    );
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  listProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
