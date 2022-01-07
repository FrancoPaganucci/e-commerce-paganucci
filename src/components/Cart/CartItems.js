import React from 'react'
import styled from 'styled-components';

const StyledCartItem = styled.div`
display: flex;
align-items: center;
column-gap: 40px;
padding: 20px 10px;
margin-right: 40px;
transition: all .3s ease-in-out;
&:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all .2s ease-in-out;
}
tr {
    width: 160px;
}
.prod-img {
    max-width: 95px; 
}
`
const CartItems = ({ id, image, name, price, quantity }) => {
    return (
        <StyledCartItem>
            <tr><img className='prod-img' src={`${image}`} alt="product" /></tr>
            <tr className='prod-title'>{name}</tr>
            <tr className='prod-price'>Price: $ {price}</tr>
            <tr>X{quantity}</tr>
            <tr>{id}</tr>
        </StyledCartItem>
    )
}

export default CartItems
