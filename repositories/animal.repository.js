// Database
import { connect } from "../database/database.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertAnimal(animal) {
  const conn = await connect();

  try {
    const sql =
      "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3)";
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function listAnimais() {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM animais";
    const res = await conn.query(sql);

    return res.rows;
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function listAnimaisByProprietarioId(proprietario_id) {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM animais WHERE proprietario_id = $1";
    const values = [proprietario_id];
    const res = await conn.query(sql, values);

    return res.rows;
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimal(animal_id) {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM animais WHERE animal_id = $1";
    const values = [animal_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(animal_id) {
  const conn = await connect();

  try {
    const sql = "DELETE FROM animais WHERE animal_id = $1";
    const values = [animal_id];
    await conn.query(sql, values);
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();

  try {
    const sql =
      "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *";
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  listAnimais,
  listAnimaisByProprietarioId,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
