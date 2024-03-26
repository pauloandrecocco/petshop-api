// Database
import { connect } from "../database/database.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function insertProprietario(proprietario) {
  const conn = await connect();

  try {
    const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2)";
    const values = [proprietario.nome, proprietario.telefone];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function listProprietarios() {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM proprietarios";
    const res = await conn.query(sql);

    return res.rows;
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function getProprietario(proprietario_id) {
  const conn = await connect();

  try {
    const sql = "SELECT * FROM proprietarios WHERE proprietario_id = $1";
    const values = [proprietario_id];
    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function deleteProprietario(proprietario_id) {
  const conn = await connect();

  try {
    const sql = "DELETE FROM proprietarios WHERE proprietario_id = $1";
    const values = [proprietario_id];
    await conn.query(sql, values);
  } catch (err) {
    const error = errorHandler(500, err.message);
    throw error;
  } finally {
    conn.release();
  }
}

async function updateProprietario(proprietario) {
  const conn = await connect();

  try {
    const sql =
      "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *";
    const values = [
      proprietario.nome,
      proprietario.telefone,
      proprietario.proprietario_id,
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
  insertProprietario,
  listProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
