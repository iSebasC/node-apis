const express = require('express');
const router = express.Router();
const estateController = require('../controllers/estateController');

router.get('/', estateController.getAllestate);

module.exports = router;