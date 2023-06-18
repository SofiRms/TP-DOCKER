const pool = require("../database/connection");

const getAllBooks = async (req, res) => {
  const sql = "SELECT * FROM libros";
  pool.query(sql, (err, rows) => {
    !err ? res.json(rows) : console.log(err);
  });
};

const insertBook = async (req, res) => {
  const { nombre, precio } = req.body;
  try {
    const sql = `INSERT INTO libros (nombre, precio) VALUES ('${nombre}', '${precio}')`;

    pool.query(sql, (err, rows) => {
      !err
      ? res.json(rows) 
      : console.log(err);
    });
  } catch (error) {
    console.log("algo ha salido mal: ", error);
  }
};

module.exports = { getAllBooks, insertBook };
