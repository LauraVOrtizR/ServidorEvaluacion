const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BlackPinkOT4_',
    database: 'evaluacion'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Conexión exitosa');

});

module.exports = db;