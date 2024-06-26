import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

const Proprietario = sequelize.define(
  "proprietarios",
  {
    proprietarioId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "proprietario_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscore: true }
);

export default Proprietario;
