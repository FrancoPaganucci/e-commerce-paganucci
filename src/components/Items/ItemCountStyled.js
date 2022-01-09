import styled from 'styled-components';
import { theme_primary, theme_secondary } from '../../styles/globalColors';

export const StyledItemCount = styled.div`
width: 300px;
margin-top: 40px;
padding: 20px;
color: #000;
display: flex;
flex-direction: column;
background-color: #E5E5E5;
border-radius: 15px;
.stock-setter-cnt {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 7px;
    column-gap: 50px;
    align-items: center;
    background-color: #FFF;
    button {
        padding: 0px 35px;
        background-color: #FFF;
        color: ${theme_primary};
        font-size: 40px;
        line-height: 45px;
        border: none;
        cursor: pointer;
    }
    .counter {
        background-color: #FFF;
        font-weight: 800;
    }
}
.agregar-al-carrito-btn {
    background-color: ${theme_primary};
    color: #FFF;
    font-size: 20px;
    padding: 13px 0px;
    margin-top: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    border-radius: 10px;
    text-decoration: none;
    border: 0;
    &:hover {
        background-color: ${theme_secondary};
        box-shadow: none;
        color: ${theme_primary};
        transition: all .3s ease-in-out;
        font-weight: 900;
    }
}
`