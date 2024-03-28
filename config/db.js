import Sequelize from "sequelize";
import mongodb from "mongodb";

// PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRESQL_URI, {
  dialect: "postgres",
  define: {
    timestamps: false, // Cria colunas 'created_at' e 'updated_at'
  },
});

// MongoDB
function getMongodbClient() {
  const client = new mongodb.MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}

export { sequelize, getMongodbClient };

//
