const ctrl = {};
const pool = require("../database/connection");

// const getAllBooks = async () => {
//   let conexion;
//   try {
//     conexion = await pool.getConnection();
//     const rows = await conexion.query("SELECT * FROM libros");
//     return rows;
//   } catch (error) {
//     throw error;
//   } finally {
//     if (conexion) conexion.end();
//   }
// };

// const insertarLibro = async (req, res) => {
//   const { nombre, precio } = req.body;

//   if (!nombre || !precio) {
//     res.status(400).json({ error: "Se requiere nombre y precio del producto" });
//   } else {
//     try {
//       const resultado = await insertBooks(nombre, precio);
//       res.json(resultado);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error del servidor" });
//     }
//   }
// };

const getAllBooks = async (req, res) => {
  const sql = "SELECT * FROM libros";

  pool.query(sql, (err, rows) => {
    !err ? res.json(rows) : console.log(err);
  });
};

const insertarLibro = async (req, res) => {
  const { nombre, precio } = req.body;
  try {
    const sql = `INSERT INTO libros (nombre, precio) VALUES ('${nombre}', '${precio}')`;

    pool.query(sql, (err, rows) => {
      !err ? res.json(rows) : console.log(err);
    });
  } catch (error) {}
};

module.exports = { getAllBooks, insertarLibro };
