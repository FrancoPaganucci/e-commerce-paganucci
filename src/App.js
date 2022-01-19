import ItemListContainer from "./components/Items/ItemList/ItemListContainer";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./components/Cart/Cart"
import { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import ItemDetailContainer from "./components/Items/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomProvider } from "./context/cartContext";

const linksECommerce = [
    {href:"/products", name:"Catalogue", id: 1},
    {href: "/category/electronics", name: "Electronics", id: 2},
    {href: "/category/jewelery", name: "Jewelery", id: 3}
];
const greeting = "Aprovechá las últimas ofertas!";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 100;
}
`

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <GlobalStyle />
                <main>
                    <NavBar links={linksECommerce} />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting={greeting} />} />
                        <Route path="/products" element={<ItemListContainer greeting={greeting} />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/category/:id" element={<ItemListContainer greeting={greeting} />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                    </Routes>
                </main>
                <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            </BrowserRouter>
        </CustomProvider>
    )
};

export default App;