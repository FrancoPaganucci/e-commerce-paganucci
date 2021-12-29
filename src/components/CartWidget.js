import styled from 'styled-components';
import { theme_secondary, theme_primary } from '../styles/globalColors';
import { NavLink } from 'react-router-dom'; // usar en elcarrito

// ejemplo de función como prop para event listener en button
const foo = () => {
    console.log("foo");
}

const CartDiv = styled.div`
#cart-navlink {
    padding: 15px 20px;
    margin-right: 10px;
    text-align: center;
    text-decoration: none;
    color: #FFF;
    display: flex;
    column-gap: 20px;
    align-items: center;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        background-color: ${theme_secondary};
        color: ${theme_primary};
        transition: all .3s ease-in-out;
    }
    p {
        font-size: 20px;
    }
}
    `
const CartWidget = () => {

    return (<>
        <CartDiv>
            <NavLink onClick={foo} to="/cart" className="material-icons" id="cart-navlink">
                <p>0</p>
                shopping_cart
            </NavLink>
        </CartDiv>
    </>
    )
};

export default CartWidget;
