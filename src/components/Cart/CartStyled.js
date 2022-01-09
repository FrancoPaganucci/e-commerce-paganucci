import styled from 'styled-components';
import { theme_primary, theme_secondary } from '../../styles/globalColors';

export const StyledCartItemContainer = styled.div`
margin: 30px;
.bottom-div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: end;
    .total-price {
        
    }
    .btn-empty-cart {
        width: 150px;
        margin: 10px 0;
        background-color: ${theme_primary};
        color: white;
        text-decoration: none;
        text-align: center;
        font-size: 15px;
        padding: 10px 0px;
        border-radius: 10px;
        border: none;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: ${theme_secondary};
            color: ${theme_primary};
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
}

.empty-cart-container {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    align-items: center;
    .cart-title {
        margin-top: 20px;
    }
    .shop-link {
        text-decoration: none;
        background-color: ${theme_primary};
        color: #FFF;
        padding: 30px 60px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: ${theme_secondary};
            color: ${theme_primary};
            transition: all .3s ease-in-out;
        }
    }
}
`
