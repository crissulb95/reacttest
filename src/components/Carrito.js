import React from 'react';
import Producto from './Producto.js';

const Carrito = ({carrito, agregarProducto}) => ( 
    <div className='carrito'>
        <h2>Carrito de compras</h2>
        {carrito.length === 0 ?
            <p></p>
        : carrito.map( producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
 );

 
export default Carrito;