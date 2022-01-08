import React from 'react'
import ItemCount from './ItemCount';
import { toast } from 'react-hot-toast';
import  styled  from 'styled-components';
import { useState, useEffect, cleanup } from 'react';
import { Link } from 'react-router-dom';
import { theme_secondary, theme_primary } from '../../styles/globalColors';
import { useContexto } from '../../context/cartContext';

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
    }
}
#right-side {
    display: flex;
    flex-direction: column;
    h1 {
        margin-bottom: 15px;
        font-weight: 600;
        letter-spacing: -0.4px;
    }
    h2 {
        padding-bottom: 30px;
    }
    h3 {
        width: 80%;
        text-align: justify;
        letter-spacing: 0.2px;
        line-height: 29px;
    }
    .finalizar-compra-btn {
        margin: 70px 0;
        background-color: ${theme_primary};
        color: white;
        text-decoration: none;
        width: 250px;
        text-align: center;
        font-size: 20px;
        padding: 13px 0px;
        border-radius: 10px;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: ${theme_secondary};
            color: ${theme_primary};
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
}

`
const ItemDetail = ({ desc, title, price, image, id }) => {
    const [itemsEstadoInterno, setItemsEstadoInterno] = useState(0);
    const { addItem } = useContexto();
    const this_product = {
        id,
        title,
        image,
        price,
        desc,
        quantity: 0
    }
    const onAdd = (contador, setContador) => {
        const contador_copy = contador;
        if (contador > 1) {
            toast.success(`El usuario agregó ${contador} items al carrito`);
        } else {
            toast.success(`El usuario agregó ${contador} item al carrito`);
        }
        setTimeout(() => {
            setItemsEstadoInterno(contador_copy);
            setContador(0);
        }, 3200)
    }
    // re-renderizar al cambiar el estado interno cuando sucede el onAdd.
    useEffect(() => {
        console.log("cambió el estado interno!")
        this_product.quantity = itemsEstadoInterno;
    }, [itemsEstadoInterno]);
    
    if (itemsEstadoInterno !== 0) {
        //this_product.quantity = itemsEstadoInterno;
        return (
            <StyledItemDetail>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                    <h1>{title}</h1>
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        <Link className='finalizar-compra-btn' to='/cart' onClick={()=>{addItem(this_product, itemsEstadoInterno)}} >Finalizar compra</Link>
                    </div>
                </div>
            </StyledItemDetail>
        )
    }


    // renderizar al cargar el item detail APLICAR TERNARIO
    if (image) {
        return (
            <StyledItemDetail>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h1>{title}</h1>
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
