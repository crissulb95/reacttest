import React, { Fragment } from 'react';

/*const Producto = ({producto}) => {
return ( <p>{producto.nombre} <span>{producto.precio}</span> </p> );
}
 
export default Producto;*/

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {id, nombre, precio} = producto;

    //agregar al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter( producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    };

    //eliminar del carrito
    const eliminarProducto = (id) => { 
        const productos = carrito.filter( producto =>  producto.id !== id)
        agregarProducto(productos);
        
    };


    return (<Fragment> 
                <p>{nombre} <span>${precio}</span> </p>
                
                { productos
                ? ( <button type='button'
                            onClick={ () => seleccionarProducto(id) }>
                            Comprar
                    </button>)
                : ( <button type='button'
                            onClick={ () => eliminarProducto(id) }>
                            Eliminar
                    </button>)
                }
            </Fragment>
        );
}

export default Producto;