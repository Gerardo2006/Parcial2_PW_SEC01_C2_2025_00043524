// cuentasRoutes.js
const express = require('express');
const router = express.Router();
const {
  obtenerCuentas,
  obtenerCuentaPorId,
  obtenerBalanceActivo
} = require('../controllers/cuentasController');

// Lista todas o busca por queryParam
router.get('/', obtenerCuentas);

// Obtiene el balance de la cuenta activa
router.get('/balance', obtenerBalanceActivo);

// Busca una cuenta por ID
router.get('/:id', obtenerCuentaPorId);

module.exports = router;
