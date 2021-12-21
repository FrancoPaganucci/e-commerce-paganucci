import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';

const ItemDetailContainer = ({productid}) => {
    // ¿Por qué me entra acá como undefined, si en la url imprime bien el id del producto que se clickea?
    console.log(`Acá ESTA EL ID EN ITEMDETAILCONTAINER: ${productid}`)
    const [product, setProduct] = useState({}); 
    useEffect(() => {
        const traerProducto = async () => {
            try {
                 const resp = await fetch(`https://fakestoreapi.com/products/${productid}`); 
                 const info = await resp.json();
                 return info;
            } catch (error) {
                console.log(error);
            }
            
        }
        const productoPromise = traerProducto()
            productoPromise.then(response => {
                setProduct(response);
                console.log(product)
            })
    }, [])
    if (product == undefined) {
        return (
            <div>
                <h1>CARGANDO DETALLE DE PRODUCTO...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <ItemDetail desc={product.description} title={product.title} price={product.price} image={product.image} />
            </div>
        )
    }
}

export default ItemDetailContainer;
