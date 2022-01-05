import React from 'react'
import { useContexto } from './context/cartContext';

const Cart = () => {

    const {carrito, borrarDelCarrito} = useContexto();

    return (
        <div>
            Soy carrito
            <br />
            {console.log(`carrito traido desde el context!: ${carrito}`)}
        </div>
    )
}

export default Cart
