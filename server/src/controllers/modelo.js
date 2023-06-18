/* const pool = require("../database/connection")


async function insertBooks(nombre, precio) {
  let dbConnection;
  try {
    dbConnection = await pool.getConnection();
      // await dbConnection.query(
      //   `CREATE TABLE IF NOT EXISTS libros (
      //       id INT AUTO_INCREMENT PRIMARY KEY,
      //       nombre VARCHAR(255) NOT NULL,
      //       precio DECIMAL(10, 2) NOT NULL`
      //   )
      await dbConnection.query('INSERT INTO libros (nombre, precio) VALUES (?, ?)', [nombre, precio]);
        return { mensaje: 'Libro insertado correctamente' };
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) dbConnection.end();
  }
}

module.exports =  insertBooks */