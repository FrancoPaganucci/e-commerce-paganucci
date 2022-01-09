import { NavLink } from 'react-router-dom'; // usar en elcarrito
import { useContexto } from "../../context/cartContext";
import { CartDiv } from './CartWidgetStyled';

const CartWidget = () => {
    const { total } = useContexto();
    return (<>
        <CartDiv className={total > 0 ? "show" : "hidden"}>
            <NavLink to="/cart" className="material-icons" id="cart-navlink" >
                <p>{total ? total : 0}</p>
                shopping_cart
            </NavLink>
        </CartDiv>
    </>
    )
};

export default CartWidget;
