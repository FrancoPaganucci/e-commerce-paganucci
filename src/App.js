import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Cart from "./Cart"
import { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const linksECommerce = [
    {href:"/productos", name:"Productos", id: 1},
    {href: "/categoria/1", name: "categoria 1", id: 2},
    {href: "/categoria/2", name: "categoria 2", id: 3},  
    {href:"/producto/:productoId", name:"Detalle de producto", id:4} // esto tiene que pasar al botón VER DETALLE de los productos en ItemListContainer
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
                    <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Toaster position="top-right" toastOptions={{duration: 3000}} />
        </BrowserRouter>
    )
};

export default App;