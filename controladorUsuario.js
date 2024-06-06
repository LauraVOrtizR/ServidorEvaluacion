const Usuario = require('./usuario');
module.exports = {
    loginUsuario (req, res){
            const user = req.body; //Datos del usuario desde el cliente
            Usuario.logIn(user, (err, data) => {
                if(err){
                    res.status(501).json({
                        success: false,
                        message: 'Error al iniciar sesión',
                        error: err
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: 'Inicio de sesión exitoso',
                    data: data //Data que retorna la consulta
                });
            });
    }
}