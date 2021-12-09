import styled from 'styled-components';
import {theme_blue, theme_yellow } from '../styles/globalColors.js';


// ejemplo de función como prop para event listener en button
const foo = () => {
    console.log("foo");
}

const CartDiv = styled.div`
    padding: 15px 20px;
    margin-right: 10px;
    text-align: center;
    color: #FFF;
    display: flex;
    column-gap: 20px;
    align-items: center;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        background-color: ${theme_yellow};
        color: ${theme_blue};
        transition: all .3s ease-in-out;
    }
    p {
        font-size: 20px;
    }
    `
const CartWidget = () => {

    return (<>
        <CartDiv>
            <p>0</p>
            <span onClick={foo} className="material-icons">
                shopping_cart
            </span>
        </CartDiv>
    </>
    )
};

export default CartWidget;
