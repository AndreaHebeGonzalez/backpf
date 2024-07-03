//importo el modulo mysql2

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.BD_HOST,
  user: process.env.BD_USER, 
  password: process.env.BD_PASS, 
  database: process.env.BD_NAME,
  port: process.env.BD_PORT || 3306
    /* host:"localhost",
    user:"root", 
    password:"", 
    database:"patitas_felices_bd",  */
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.log("Error durante la conexión a la base de datos", error);
    return;
  }
  console.log("Conexion establecida con la base de datos");
});

module.exports =
  connection; /* Esto se usa en los controladores para establecer la conexion con la base de datos */
