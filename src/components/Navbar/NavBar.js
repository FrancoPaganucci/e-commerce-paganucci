import CartWidget from "../Navbar/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader } from "./NavBarStyled";

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