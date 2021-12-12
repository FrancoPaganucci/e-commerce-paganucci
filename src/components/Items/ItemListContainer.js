// shortcut: rafce (React Arrow Function Component Export)
import styled from 'styled-components';
import { theme_blue, theme_yellow, theme_grey } from '../../styles/globalColors';
import ItemCount from '../Items/ItemCount';
import ItemList from './ItemList';
import { toast } from 'react-hot-toast';
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
    const onAdd = (cantidad) => {
        if (cantidad > 1) {
            toast.success(`El usuario agregó ${cantidad} items al carrito`);
        } else {
            toast.success(`El usuario agregó ${cantidad} item al carrito`);
        }
        setTimeout(() => {
            window.location.reload();
        }, 3200)
    }
    const [lista, setLista] = useState([]);
    useEffect(() => {
        setTimeout(() => {
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
                // acá había probado antes de reasignarle el valor con el spread operator, pero me daba error. En estos casos entonces no hace falta usarlo? supongo que no porque no es que estoy copiando un array, pero sí estoy modificando ese array vacío.
                setLista(response);
                console.log(lista);
            })
        }, 2000)
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
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </StyledListContainer>
        )
    }
};

export default ItemListContainer;