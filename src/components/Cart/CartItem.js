import React from 'react'
import styled from 'styled-components';
import { useContexto } from '../../context/cartContext';

const StyledCartItem = styled.div`
table {
    tbody {
        display: flex;
        align-items: center;
        column-gap: 50px;
        padding: 20px 30px;
        margin-right: 40px;
        transition: all .3s ease-in-out;
        border-radius: 25px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            transition: all .2s ease-in-out;
        }
    tr {
        width: 200px;
    }
    .prod-img {
        max-width: 95px; 
    }
}

`
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
