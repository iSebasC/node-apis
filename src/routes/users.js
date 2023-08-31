const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:codigo_usuario', userController.getUserByCode);

router.get('/:codigo_usuario', userController.getUserInvestmentAndProperties);


module.exports = router;
