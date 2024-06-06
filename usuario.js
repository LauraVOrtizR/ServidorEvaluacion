const db = require('./config');
const Usuario = {};

Usuario.logIn = (user, result) => {
    const sql = `
    SELECT idUsuario, nombreUsuario FROM usuarios
    WHERE claveUsuario = ? AND correoUsuario = ?;
    `;
    db.query(
        sql,[
            user.claveUsuario,
            user.correoUsuario
        ],
        (err, res) => {
            if(err){
                console.log('Error: ', err);
                result(err, null);
            }
            else{
                console
                result(null, res);
            }
        }
    )
};

module.exports = Usuario;
