// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import { theme_blue, theme_yellow, theme_grey } from '../styles/globalColors';
import { useState } from 'react';
import ItemCount from './ItemCount';

const StyledListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    align-items: center;
    padding: 60px 20px;
    background-color: ${theme_blue};
    color: ${theme_grey};
    width: 50%;
    border: 3px solid ${theme_yellow};
    border-radius: 50px;
    text-align: center;
`

const ItemListContainer = ({usuario, greeting}) => {

    const onAdd = () => {
        console.log("onAdd()")
    }

    return (
        <StyledListContainer>
            <h1>Bienvenido, {usuario}!</h1> 
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </StyledListContainer>
    )
};

export default ItemListContainer;