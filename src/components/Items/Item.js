import React from 'react'
import styled from 'styled-components';
import { theme_blue } from '../../styles/globalColors';

const StyledItem = styled.div`
margin: 30px;
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: 300px;
overflow: hidden;
border: 1px solid ${theme_blue};
padding: 20px;
border-radius: 50px;
.prod-img {
    width: 140px;
    height: 140px;
}
.prod-title {
    margin-top: 10px;
    font-weight: 900;
    color: ${theme_blue}
}
.prod-price {
    margin-top: 10px;
    font-weight: 900;
}
.prod-descr {
    margin-top: 10px;
}
`
const Item = ({image, name, price, description}) => {
    return (
        <StyledItem>
            <img className='prod-img' src={`${image}`} alt="product" />
            <p className='prod-title'>Title: {name}</p>
            <p className='prod-price'>Price: $ {price}</p>
            <p className='prod-descr'>Description: {description}</p>
        </StyledItem>
    )
}

export default Item;