import React from 'react'
import { useContexto } from '../../context/cartContext';
import CartItems from './CartItems';

const CartItemContainer = () => {
    const { cart } = useContexto();
    console.log(cart)
    // condicion ? true : false (esto es una expresión, yo sé que retorna un valor, vale algo) ==> TERNARIO
    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <CartItems key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
                        ))}
                    </ul>
                    <h3>Total: $</h3>
                </>
            ) : <p>No hay productos en el carrito</p>}
        </div>
    )
}

export default CartItemContainer;
