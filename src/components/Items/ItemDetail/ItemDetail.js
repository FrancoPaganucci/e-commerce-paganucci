import React from 'react'
import ItemCount from '../ItemCount';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContexto } from '../../../context/cartContext';
import { StyledItemDetail } from './ItemDetailStyled';

const ItemDetail = ({ desc, title, price, image, id }) => {
    const [itemsEstadoInterno, setItemsEstadoInterno] = useState(0);
    const { total, setTotal } = useContexto();
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
            toast.success(`Agregaste ${contador} items al carrito`);
        } else {
            toast.success(`Agregaste ${contador} item al carrito`);
        }
        setTimeout(() => {
            setItemsEstadoInterno(contador_copy);
            setContador(0);
        }, 2200)
    }
    
    useEffect(() => {
        this_product.quantity = itemsEstadoInterno;
        setTotal(total + itemsEstadoInterno);
    }, [itemsEstadoInterno]);

    return (
        <StyledItemDetail>
            {image ? (
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h1>{title}</h1>
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        {itemsEstadoInterno !== 0 ? (
                            <>
                                <Link className='ctas-post-compra' to='/cart' >Ir al carrito</Link>
                                <Link className='ctas-post-compra' to='/products' >Seguir comprando</Link>
                            </>
                        ) : (
                            <ItemCount stock={5} initial={1} onAdd={onAdd} this_product={this_product} />
                        )}
                    </div>
                </div>
            ) : (
                <h1>CARGANDO EL DETALLE DEL PRODUCTO...</h1>
            )
            }
        </StyledItemDetail>
    )
}

export default ItemDetail;
