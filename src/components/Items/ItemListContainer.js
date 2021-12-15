// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import { theme_blue, theme_yellow, theme_grey } from '../../styles/globalColors';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';


const StyledListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    align-items: center;
    padding: 60px 20px;
    /*background-color: ${theme_blue};
    color: ${theme_grey};
    width: 50%;
    border: 3px solid ${theme_yellow};*/
    border-radius: 50px;
    text-align: center;
`
const ItemListContainer = ({ usuario, greeting }) => {
    // Llamado a la API con fetch para trae productos en una lista...
    const [lista, setLista] = useState([]);
    useEffect(() => {
        const traerProductos = async () => {
            try {
                const resp = await fetch('https://fakestoreapi.com/products?limit=5');
                const info = await resp.json();
                return info;
            } catch (error) {
                console.log(error);
            }
        }
        const productos = traerProductos();
        productos.then(response => {
            console.log(response);
            setLista(response);
        })
    }, [])

    if (lista.length < 1) {
        return (
            <StyledListContainer>
                <h1>Bienvenido, {usuario}!</h1>
                <h1>{greeting}</h1>
                <h1 style={{marginTop: 60}}>CARGANDO PRODUCTOS...</h1>
            </StyledListContainer>
        )
    } else {
        return (
            <StyledListContainer>
                <h1>Bienvenido, {usuario}!</h1>
                <h1>{greeting}</h1>
                <ItemList items={lista} />
            </StyledListContainer>
        )
    }
};

export default ItemListContainer;