import React, { Fragment, useState } from 'react'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Producto from './components/Producto.js';
import Carrito from './components/Carrito.js';
import './components/carrito.css';

function App() {
  const fecha = new Date().getFullYear();

  const [ productos, guardarProductos ] = useState([ //productos es el array que contiene todos estos productos
    { id:1, nombre:'Camisa ReactJS', precio: 50 },
    { id:2, nombre:'Camisa Redux', precio: 30 },
    { id:3, nombre:'Camisa JavaScript', precio: 45 },
    { id:4, nombre:'Camisa VueJS', precio: 55 },
    { id:5, nombre:'Camisa Angular', precio: 40 },
  ]);

  //carrito de compras
  const [ carrito, agregarProducto ] = useState( [] );

  return (
    <Fragment>
      <Header titulo='Tienda Virtual'/>
      <h2> Tienda Momoy. Productos </h2>
      {productos.map( serieProducto => (
        <Producto 
          key={serieProducto.id}
          producto={serieProducto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
