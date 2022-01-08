import React from 'react'
import { useContexto } from '../../context/cartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme_secondary, theme_primary } from '../../styles/globalColors';

const StyledCartItemContainer = styled.div`
margin: 30px;

.empty-cart-container {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    align-items: center;
    .cart-title {
        margin-top: 20px;
    }
    .shop-link {
        text-decoration: none;
        background-color: ${theme_primary};
        color: #FFF;
        padding: 30px 60px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: ${theme_secondary};
            color: ${theme_primary};
            transition: all .3s ease-in-out;
        }
    }
}
`
const CartItemContainer = () => {
    const { cart, clear, total_price } = useContexto();
    console.log(cart)
    return (
        <StyledCartItemContainer>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <CartItem key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
                        ))}
                    </ul>
                    <h3>Total: ${total_price}</h3>
                    <button onClick={() => { clear() }}>Vaciar carrito</button>
                </>
            ) : (
                <>
                <div className='empty-cart-container'>
                    <h1 className='cart-title'>No hay productos en el carrito</h1>
                    <Link to='/products' className='shop-link'>Ver Catálogo</Link>
                </div>
                </>
            )
            }</StyledCartItemContainer>
    )
}

export default CartItemContainer;
