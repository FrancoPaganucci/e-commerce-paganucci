// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import { theme_blue, theme_yellow, theme_grey } from '../styles/globalColors';

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
    return (
        <StyledListContainer>
            <h1>Bienvenido, {usuario}!</h1> 
            <h1>{greeting}</h1>
        </StyledListContainer>
    )
};

export default ItemListContainer;