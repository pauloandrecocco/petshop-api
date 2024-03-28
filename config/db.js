import Sequelize from "sequelize";
import mongoose from "mongoose";

// PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRESQL_URI, {
  dialect: "postgres",
  define: {
    timestamps: false, // Cria colunas 'created_at' e 'updated_at'
  },
});

// MongoDB
async function connectMongodb() {
  return await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { sequelize, connectMongodb };
