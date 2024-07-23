const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// rutas del crud

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.buscarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);
router.put('/:id', proveedorController.modificarProveedor);

module.exports = router;
