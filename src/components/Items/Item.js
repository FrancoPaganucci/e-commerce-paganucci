import React from 'react'
import styled from 'styled-components';
import { theme_blue } from '../../styles/globalColors';
import { Link } from 'react-router-dom';

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
    color: ${theme_blue};
}
.prod-price {
    margin-top: 10px;
    font-weight: 900;
}
.link-cnt {
    display: flex;
    height: 100%;
    align-items: end;
    .vermas-btn {
        text-decoration: none;
        color: ${theme_blue};
        font-weight: 900;
        font-size: 20px;
        margin-bottom: 20px;
        &:hover {
            text-decoration: underline;
        }
    }
}
`
const Item = ({image, name, price, id}) => {
    console.log(`id en Item: ${id}`)
    return (
        <StyledItem>
            <img className='prod-img' src={`${image}`} alt="product" />
            <p className='prod-title'>Title: {name}</p>
            <p className='prod-price'>Price: $ {price}</p>
            <div className="link-cnt">
                <Link className='vermas-btn' key={id} to={`/item/${id}`} >VER MÁS</Link>
            </div>
        </StyledItem>
    )
}

export default Item;