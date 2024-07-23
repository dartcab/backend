const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

//creamos nuestro servidor
const app = express();
const port =  process.env.PORT || 7000;

// enlazamos  la conexion con nuestra base de datos
conectarBD();
app.use(cors());
app.use(express.json());

// definimos la ruta principal del proyecto
app.use('/api/clientes', require ('../routes/rutasCliente.js'));
app.use('/api/proveedores', require ('../routes/rutas'));

app.listen(port,() => {
    console.log('El Servidor esta conectado http://localhost:7000/  ');
})

// definimos la ruta principal
app.get('/', (req, res) => {
  res.send('Hola mundo desde la web')
});