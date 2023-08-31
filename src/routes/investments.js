// src/routes/investments.js
const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');

// Ruta para obtener información de inversión e inmuebles de un usuario
router.get('/:codigo_usuario', investmentController.getUserInvestmentAndProperties);

module.exports = router;
