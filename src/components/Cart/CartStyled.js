import styled from 'styled-components';
import { theme_primary, theme_secondary } from '../../styles/globalColors';

export const StyledCartItemContainer = styled.div`
margin: 30px;

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
