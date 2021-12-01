const NavBar = () => {
    return (
        <header id="main-header" className="header">
            <div className="header-left-side">
                <h1>BuyIT</h1>
                <span className="material-icons">
                    shopping_cart
                </span>
            </div>
            
            <nav>
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
                <a href="#" id="a-login">Login</a>
            </nav>
        </header>
    )
};

export default NavBar;