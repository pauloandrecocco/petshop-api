import { errorHandler } from "./error-handler.js";

function validateId(id, donoId = "") {
  id = Number(id);
  if (!id || typeof id !== "number" || id - Math.floor(id) !== 0 || id <= 0) {
    const message = donoId
      ? `Informe um ID de ${donoId} válido.`
      : `Informe um ID válido.`;
    const error = errorHandler(400, message);
    throw error;
  }
}

function validateProprietario(proprietario) {
  const { nome, telefone } = proprietario;
  if (
    !nome ||
    !telefone ||
    typeof nome !== "string" ||
    typeof telefone !== "string"
  ) {
    const error = errorHandler(400, `Informe Nome e Telefone válidos.`);
    throw error;
  }
}

function validateAnimal(animal) {
  const { nome, tipo, proprietario_id } = animal;

  if (!nome || !tipo || typeof nome !== "string" || typeof tipo !== "string") {
    const error = errorHandler(400, `Informe Nome e Tipo válidos.`);
    throw error;
  }
  validateId(proprietario_id, "Proprietário");
}

export { validateId, validateProprietario, validateAnimal };
