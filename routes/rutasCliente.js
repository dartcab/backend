const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// rutas del crud

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);
//router.patch('/:id', clienteController.modificarCliente);

module.exports = router;