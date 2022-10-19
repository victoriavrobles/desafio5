const Contenedor = require("./contenedor");

const productos = new Contenedor("./productos.json");

productos.save({ title: "nuevo producto", price: 123 });