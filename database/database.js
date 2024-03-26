import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    // TODO: Colocar como variável de ambiente
    connectionString: "<db-connection-string>",
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };
