import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import { createGlobalStyle } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

const linksECommerce = [
    {href:"#", name:"Productos"},  
    {href:"#", name:"Mi cuenta"}
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
        <>
            <GlobalStyle />
            <NavBar nombre={usuario} edad={26} links={linksECommerce} />
            <ItemListContainer usuario={usuario} greeting={greeting} />
            <ItemDetailContainer />
            <Toaster position="top-right" toastOptions={{duration: 3000}} />
        </>
    )
};

export default App;