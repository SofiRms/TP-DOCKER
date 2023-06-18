const mysql = require('mysql')

const pool = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'user', 
    password: process.env.DB_PASSWORD || 'mypassword', 
    database: process.env.DB_NAME || 'libros',
    connectionLimit: 5, 
});


pool.connect(err => {    user: 'root', 

    err
        ? console.error(`algo salió mal: ${err}`)	
        : console.log(`connection ready`)
})

module.exports = pool;
