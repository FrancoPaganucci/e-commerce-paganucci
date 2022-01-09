import React from 'react';
import Item from './Item';
import { StyledItemList } from './ItemListStyled';

const ItemList = ({ items }) => {
    return (
        <StyledItemList>
            {items.length > 0 ? (
                <>
                    {items.map(item => (
                        <Item key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} />
                    ))}
                </>
            ) : (
                <h1>LOADING...</h1>
            )}
        </StyledItemList>
    )
}

export default ItemList;