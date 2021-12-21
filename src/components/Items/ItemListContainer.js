// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import { theme_blue, theme_yellow, theme_grey } from '../../styles/globalColors';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    const { categoriaId } = useParams();
    console.log(categoriaId)
    // acá tendría que hacer un if que haga el fetch son el parámetro si lo trae y si no trae nada, que me traiga todos los productos... pero se repite mucho código, habría que encontrar la manera
    useEffect(() => {
        if (categoriaId != undefined) {
            const traerProductos = async () => {
                console.log("acá hace el fetch por category")
                try {
                    const resp = await fetch(`https://fakestoreapi.com/products/category/${categoriaId}?limit=5`);
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
            
        } else {
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
        }
    }, [categoriaId]) // en los detalles de producto, en el array de dependencias tengo que meter el id, el parámetro. como este no cambia, evita que re-renderice cada vez que el usuario vuelve a clickear en la categoría...

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