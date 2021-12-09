import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import { Toaster, toast} from 'react-hot-toast'

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
            <Toaster position="bottom-right"/>
        </>
    )
};

export default App;