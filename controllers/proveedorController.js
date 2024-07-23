const Proveedor = require('../models/Proveedores');

// funcin para buscar los proveedores que estan en la base de datos
exports.buscarProveedores = async(req, res) => {

    try {
        
        const proveedor = await Proveedor.find();
        res.json(proveedor)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los Proveedores');
    }
}

// funcion para agregar proveedores
exports.agregarProveedores = async(req, res) => {

    try {
        
        let proveedor;
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.json(proveedor);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un proveedor');
    }
}
// esta funcion es para mostrar un solo proveedor
exports.buscarProveedor = async(req,res) => {
    
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).send({msg:"EL proveedor no es encontrado con ese id"});
            return
        }
        res.json(proveedor);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un proveedor');
    }
}

// funcion para eliminar un proveedor
exports.eliminarProveedor = async(req,res) => {

    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"});
            return
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El proveedor ha sido eliminado"});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar al proveedor');
    }
}

// funcion para actualizar un proveedor


    exports.modificarProveedor = async (req, res) => {
        try {
          const proveedores = await Proveedor.findOneAndUpdate(
            { _id: req.params.id },req.body);
      
          if (!proveedores) res.status(404).send("Proveedor no encontrado");
          else
           res.json(proveedores);
        } catch (error) {
          console.log(error);
          res.status(500).send("Hubo un error al actualizar el proveedor");
        }
      }

