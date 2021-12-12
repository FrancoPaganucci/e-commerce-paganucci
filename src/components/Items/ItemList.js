import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledItemList = styled.div`
display: flex;
flex-wrap: wrap;
`
const ItemList = ({items}) => {
    console.log(items);
    if (items.length > 0) {
        return (
            <StyledItemList>
                {items.map(item => (
                    <Item key={item.id} name={item.title} price={item.price} description={item.description} image={item.image} />
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