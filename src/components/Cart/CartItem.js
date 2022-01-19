import React from 'react'
import { useContexto } from '../../context/cartContext';
import { StyledCartItem } from './CartItemStyled';

const CartItem = ({ id, image, name, price, quantity }) => {
    const { removeItem, cart } = useContexto();
    return (
        <StyledCartItem>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img className='prod-img' src={`${image}`} alt="product" />
                        </td>
                    </tr>
                    <tr className='prod-title'>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr className='prod-price'>
                        <td>
                            Price: $ {price}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            X{quantity}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => { removeItem(id, cart, quantity, price) }}>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCartItem>
    )
}

export default CartItem
