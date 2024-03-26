import Sequelize from "sequelize";

// Database
import db from "../../config/db.js";

// Models
import Proprietario from "./proprietario.model.js";

const Animal = db.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "animal_id",
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscore: true }
);

Animal.belongsTo(Proprietario, {
  foreignKey: { name: "proprietarioId", field: "proprietario_id" },
});

export default Animal;
