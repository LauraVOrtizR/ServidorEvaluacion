const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(require('./routesUsuarios'));



// //controlers
// 

// }
// //modelo
// logIn = (user, result) => {
//     const sql = `
//     SELECT idUsuario, nombreUsuario FROM usuarios
//     WHERE claveUsuario = ? AND correoUsuario = ?;
//     `;
//     db.query(
//         sql,[
//             user.claveUsuario,
//             user.correoUsuario
//         ],
//         (err, res) => {
//             if(err){
//                 console.log('Error: ', err);
//                 result(err, null);
//             }
//             else{
//                 console
//                 result(null, res);
//             }
//         }
//     )
// }

//Inciar servidor
app.listen(3000, () => {
    console.log('Server on port', app.get('port'));
});
    