import React from 'react'
import { Link } from 'react-router-dom';
import { StyledItem } from './ItemStyled';

const Item = ({ image, name, price, id }) => {
    return (
            <StyledItem>
                <Link className='vermas-btn' key={id} to={`/item/${id}`} >
                    <img className='prod-img' src={`${image}`} alt="product" />
                    <div className="hover-card">
                        <p className='prod-title'>{name}</p>
                        <p className='prod-price'>Price: $ {price}</p>
                    </div>
                </Link>
            </StyledItem>
    )
}

export default Item;