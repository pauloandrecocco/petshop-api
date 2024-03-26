import Sequelize from "sequelize";

const sequelize = new Sequelize(process.env.PG_DATABASE, {
  dialect: "postgres",
  define: {
    timestamps: false, // Cria colunas 'created_at' e 'updated_at'
  },
});

export default sequelize;
