import React from 'react'
import { useContexto } from '../../context/cartContext';
import CartItems from './CartItems';

const CartItemContainer = () => {
    const { cart, clear } = useContexto();
    console.log(cart)
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

                    <button onClick={() => {clear()}}>Vaciar carrito</button>
                </>
            ) : <p>No hay productos en el carrito</p>}
        </div>
    )
}

export default CartItemContainer;
