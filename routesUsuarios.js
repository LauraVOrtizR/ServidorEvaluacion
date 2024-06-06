const { Router } = require('express');
const router = Router();
const userController = require('./controladorUsuario');

router.post('/login', userController.loginUsuario);

module.exports = router;