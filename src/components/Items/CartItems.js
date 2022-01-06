import React from 'react'


const CartItems = ({ id, image, name, price, quantity }) => {
    return (
        <div>
            <img className='prod-img' src={`${image}`} alt="product" />
            <p className='prod-title'>{name}</p>
            <p className='prod-price'>Price: $ {price}</p>
            <p>Quantity: {quantity}</p>
            <p>{id}</p>
        </div>
    )
}

export default CartItems
