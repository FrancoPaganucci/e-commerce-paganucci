// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StyledListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 60px 20px;
    text-align: center;
`
const ItemListContainer = ({ usuario, greeting }) => {
    // Llamado a la API con fetch para trae productos en una lista...
    const [lista, setLista] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            const traerProductos = async () => {
                try {
                    const resp = await fetch(`https://fakestoreapi.com/products/category/${id}?limit=5`);
                    const info = await resp.json();
                    return info;
                } catch (error) {
                    console.log(error);
                }
            }
            const productos = traerProductos();
            productos.then(response => {
                setLista(response);
            })
            
        } else {
            const traerProductos = async () => {
                try {
                    const resp = await fetch('https://fakestoreapi.com/products?limit=9');
                    const info = await resp.json();
                    return info;
                } catch (error) {
                    console.log(error);
                }
            }
            const productos = traerProductos();
            productos.then(response => {
                setLista(response);
            })
        }
    }, [id]) // en los detalles de producto, en el array de dependencias tengo que meter el id, el parámetro. como este no cambia, evita que re-renderice cada vez que el usuario vuelve a clickear en la categoría...

    // TERNARIO
    if (lista.length < 1) {
        return (
            <StyledListContainer>
                <h1>Bienvenido a Buy IT!</h1>
                <h1>{greeting}</h1>
                <h1 style={{marginTop: 60}}>CARGANDO PRODUCTOS...</h1>
            </StyledListContainer>
        )
    } else {
        return (
            <StyledListContainer>
                <h1>Bienvenido a Buy IT!</h1>
                <h1>{greeting}</h1>
                <ItemList items={lista} />
            </StyledListContainer>
        )
    }
};

export default ItemListContainer;