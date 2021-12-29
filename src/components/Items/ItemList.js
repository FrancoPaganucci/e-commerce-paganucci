import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledItemList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`
const ItemList = ({items}) => {
    console.log(items);
    if (items.length > 0) {
        return (
            <StyledItemList>
                {items.map(item => (
                    <Item key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} />
                ))}
            </StyledItemList>
        )
    } else {
        return (
            <StyledItemList>
                <h1>LOADING...</h1>
            </StyledItemList>
        )
    }
    
}

export default ItemList;