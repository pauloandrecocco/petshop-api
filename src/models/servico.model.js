import Sequelize from "sequelize";

// Database
import { sequelize } from "../../config/db.js";

// Models
import Animal from "./animal.model.js";

const Servico = sequelize.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "servico_id",
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  },
  { underscore: true }
);

Servico.belongsTo(Animal, {
  foreignKey: { name: "animalId", field: "animal_id" },
});

export default Servico;
