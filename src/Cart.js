import React from 'react'
import { useContexto } from './context/cartContext';
import CartItems from './components/Items/CartItems';

const CartItemContainer = () => {
    const { cart } = useContexto();
    console.log(cart)
    return (
        <div>
            {cart.map(item => (
                <CartItems key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} />
            ))}
        </div>
    )
}

export default CartItemContainer
