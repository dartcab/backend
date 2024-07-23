const mongoose = require ('mongoose');

// el modulo que se cree aca debe ser igual  al de la base de datos

const proveedorSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);