import styled from 'styled-components';
import { theme_blue } from '../../styles/globalColors';
import { useState } from 'react';

const StyledItemCount = styled.div`
width: 300px;
margin-top: 50px;
padding: 20px 15px;
color: #000;
display: flex;
flex-direction: column;
background-color: #E5E5E5;
.stock-setter-cnt {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    column-gap: 50px;
    align-items: center;
    background-color: #FFF;
    button {
        padding: 0px 35px;
        background-color: #FFF;
        color: ${theme_blue};
        font-size: 40px;
        line-height: 45px;
        border: none;
        cursor: pointer;
    }
    .counter {
        background-color: #FFF;
    }
}
.agregar-al-carrito-btn {
    font-size: 20px;
    padding: 10px 0;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        background-color: ${theme_blue};
        color: #FFF;
    }
}
`
const ItemCount = ({ stock, initial, onAdd}) => {
    let [contador, setContador] = useState(initial);
    function restarCounter() {
        console.log("restar");
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    function sumarCounter() {
        console.log("sumar")
        if (contador < stock) {
            setContador(contador + 1); 
        }
    }
    return (
        <StyledItemCount>
            <div className="stock-setter-cnt">
                <button onClick={restarCounter}>-</button>
                <p className="counter">{contador}</p>
                <button onClick={sumarCounter} >+</button>
            </div>
            <button className="agregar-al-carrito-btn" onClick={() => {onAdd(contador, setContador)}}>Agregar al carrito</button>
        </StyledItemCount>
    )
}

export default ItemCount
