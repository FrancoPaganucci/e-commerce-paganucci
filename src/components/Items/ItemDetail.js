import React from 'react'
import ItemCount from './ItemCount';
import { toast } from 'react-hot-toast';
import  styled  from 'styled-components';
import { useState, useEffect, cleanup } from 'react';
import { Link } from 'react-router-dom';
import { theme_blue, theme_yellow } from '../../styles/globalColors';

const StyledItemDetail = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
align-items: center;
#info {
    display: flex;
    align-items: center;
    column-gap: 240px;
    margin-top: 50px;
    margin-left: 30px
}
#left-side {
    display: flex;
    flex-direction: column;
    img {
        width: 350px;
        padding-bottom: 60px;
    }
}
#right-side {
    display: flex;
    flex-direction: column;
    h2 {
        padding-bottom: 30px;
    }
    h3 {
        width: 80%;
        text-align: justify;
    }
    .finalizar-compra-btn {
        margin: 70px;
        background-color: ${theme_blue};
        color: white;
        text-decoration: none;
        width: 250px;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        &:hover {
            background-color: ${theme_yellow};
            color: ${theme_blue};
            cursor: pointer;
        }
    }
}

`
const ItemDetail = ({ desc, title, price, image }) => {
    const [itemsEstadoInterno, setItemsEstadoInterno] = useState(0);
    const onAdd = (contador, setContador) => {
        if (contador > 1) {
            toast.success(`El usuario agregó ${contador} items al carrito`);
        } else {
            toast.success(`El usuario agregó ${contador} item al carrito`);
        }
        setTimeout(() => {
            setContador(0);
            setItemsEstadoInterno(contador);
        }, 3200)
    }

    // re-renderizar al cambiar el estado interno cuando sucede el onAdd.
    useEffect(() => {
        console.log("cambió el estado!")
        return {
            cleanup
        }
    }, [itemsEstadoInterno])
    if (itemsEstadoInterno !== 0) {
        return (
            <StyledItemDetail>
                <h1>{title}</h1>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        <Link className='finalizar-compra-btn' to='/cart' >Finalizar compra</Link>
                    </div>
                </div>
            </StyledItemDetail>
        )
    }

    // renderizar al cargar el item detail
    if (image) {
        return (
            <StyledItemDetail>
                <h1>{title}</h1>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </StyledItemDetail>
        )
    } else {
        return (
            <StyledItemDetail>
                <h1>LOADING PRODUCT DETAIL...</h1>
            </StyledItemDetail>
        )
    }
}

export default ItemDetail;
