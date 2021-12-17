import CartWidget from "./CartWidget";
import styled from 'styled-components';
import { theme_yellow } from "../styles/globalColors";
import { Link, NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
background-color: #14213d;
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
.it-span {
    color: ${theme_yellow};
}
.p-welcome {
    margin-left: 30px;
    margin-top: 9px;
}
.header-left-side {
    display: flex;
    align-items: center;
    column-gap: 15px;
    color: #FFFFFF;
}
nav {
    margin-right: 30px;
    display: flex;
    column-gap: 50px;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 20px;
        color: #FFFFFF;
        &:hover {
            text-decoration: underline 1px solid;
        }
    }
}   
`

const NavBar = ({links}) => {
    return (
        <StyledHeader id="main-header" className="header">
            <NavLink to="/" className="header-left-side">
                <h1>Buy <span className="it-span">IT</span></h1>
            </NavLink>

            <nav>
                {links.map((elemento,indice)=>{
                    return <Link key={elemento.name+indice} to={elemento.href}>{elemento.name}</Link>
                })}
            </nav>
            
            <CartWidget />
        </StyledHeader>
    )
};

export default NavBar;