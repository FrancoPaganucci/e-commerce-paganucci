import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Cart from "./Cart"
import { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const linksECommerce = [
    // no me queda claro cómo se le pasa dinámicamente valores a estos paths, con :id, por ejemplo?
    {href:"/productos", name:"Productos", id: 1},
    {href: "/categoria/electronics", name: "Electronics", id: 2},
    {href: "/categoria/jewelery", name: "Jewelery", id: 3}
];
const usuario = "Franco";
const greeting = "Aprovechá las últimas ofertas en BuyIT!";

// global styles
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 100;
}
`

function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <main>
            <NavBar nombre={usuario} edad={26} links={linksECommerce} />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/productos" element={<ItemListContainer usuario={usuario} greeting={greeting} />} />
                    <Route path="/carrito" element={<Cart />} />
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer usuario={usuario} greeting={greeting} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Toaster position="top-right" toastOptions={{duration: 3000}} />
        </BrowserRouter>
    )
};

export default App;