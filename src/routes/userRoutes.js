const express = require('express');
const router = express.Router();
const validateUser = require('../middlewares/validateUser');
const controller = require('../controllers/userController');

// GET /users - lista todos
router.get('/', controller.getAllUsers);

// GET /users/:id - obtém por id
router.get('/:id', controller.getUserById);

// POST /users - cria (validação)
router.post('/', validateUser, controller.createUser);

// PUT /users/:id - atualiza (validação)
router.put('/:id', validateUser, controller.updateUser);

// DELETE /users/:id - remove
router.delete('/:id', controller.deleteUser);

module.exports = router;
