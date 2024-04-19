const express = require('express');
const UserController = require('../controllers/users');


const router = express.Router();

// CREATE - POST
router.post('/',UserController.createNewUser);

// READ - GET
router.get('/', UserController.getAllusers);

// UPDATE - PATCH - butuh idUser sebagai primaryKey nilai yg ingin diubah
router.patch('/:idUsers', UserController.updateUser);

// DELETE - DELETE - butuh idUser sebagai primaryKey nilai yg ingin dihapus
router.delete('/:idUsers', UserController.deleteUser);


module.exports = router;
