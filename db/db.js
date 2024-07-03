//importo el modulo mysql2

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root", 
    password:"", 
    database:"patitas_felices_bd", 
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
