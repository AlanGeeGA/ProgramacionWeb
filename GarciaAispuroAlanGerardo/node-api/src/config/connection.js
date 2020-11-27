const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "jirafa10",
    "database": "crud"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((err) => {
    if(err) {
        console.log("Ha ocurrido un error", err);
    }else {
        console.log("Base de datos conectada");
    }
});

module.exports = myConn;