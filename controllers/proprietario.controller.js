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
  const { proprietario_id } = req.params;

  try {
    validateId(proprietario_id, "Proprietário");

    res.send(await ProprietarioService.getProprietario(proprietario_id));
    logger.info(`${req.method} ${req.baseUrl}/:proprietario_id - Success`);
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(req, res, next) {
  const { proprietario_id } = req.params;

  try {
    validateId(proprietario_id, "Proprietário");

    await ProprietarioService.deleteProprietario(proprietario_id);

    res.end();
    logger.info(`${req.method} ${req.baseUrl}/:proprietario_id - Success`);
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  const { proprietario_id } = req.params;
  const proprietario = req.body;

  try {
    validateId(proprietario_id, "Proprietário");
    validateProprietario(proprietario);

    res.send(
      await ProprietarioService.updateProprietario(
        proprietario_id,
        proprietario
      )
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
