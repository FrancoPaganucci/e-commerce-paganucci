import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./Cart"
import { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const linksECommerce = [
    // no me queda claro cómo se le pasa dinámicamente valores a estos paths, con :id, por ejemplo?
    {href:"/products", name:"Catalogue", id: 1},
    {href: "/category/electronics", name: "Electronics", id: 2},
    {href: "/category/jewelery", name: "Jewelery", id: 3}
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
                    <Route path="/" element={<ItemListContainer usuario={usuario} greeting={greeting}/>} />
                    <Route path="/products" element={<ItemListContainer usuario={usuario} greeting={greeting} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category/:id" element={<ItemListContainer usuario={usuario} greeting={greeting} />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Toaster position="top-right" toastOptions={{duration: 3000}} />
        </BrowserRouter>
    )
};

export default App;