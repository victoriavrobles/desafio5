const express = require ('express');
const app = express();
const Contenedor = require('./contenedor.js');
const contenedor = new Contenedor('./productos.json');
const PORT = 8080;

app.get('/', (peticion, respuesta) => {
    respuesta.send('Desafío: Servidor express');
})

app.get('/productos', async (peticion, respuesta) => {
    const productos = await contenedor.getAll();
    respuesta.json(productos);
})

app.get('/productoRandom', async (peticion, respuesta) => {
    const productos = await contenedor.getAll();
    let number = Math.floor(Math.random() * productos.length);
    const producto = await productos.getById(number + 1);
    respuesta.send(producto)
})

const server = app.listen(PORT, () =>{
    console.log(`Aplicación escuchando en el puerto: ${server.address().port}`);
});

server.on('error', error => console.log(`Error: ${error}`));