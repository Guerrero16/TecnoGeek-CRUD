import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";          

//Capturando la seccion de productos star wars
const productosLaptops = document.querySelector("[data-laptops]");
//Capturando la seccion de consolas
const productosMoviles = document.querySelector("[data-moviles]");
//Capturando la seccion de consolas
const productosAccesorios = document.querySelector("[data-accesorios]");

//Recorrer los datos traidos del JSON
clientServices.listaProductos().then(data => {
  data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
    //Imprimir datos en el index
    if(categoria === "Laptops"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosLaptops.appendChild(nuevoProducto);
    }else if(categoria === "Moviles"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosMoviles.appendChild(nuevoProducto);
    }else if(categoria === "Accesorios"){
      const nuevoProducto = MostrarProductos(nombre, precio, descripcion, imagen, id, categoria);
      productosAccesorios.appendChild(nuevoProducto);
    }
  });
})



