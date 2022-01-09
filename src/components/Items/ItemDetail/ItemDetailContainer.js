import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); 
    
    useEffect(() => {
        const traerProducto = async () => {
            try {
                 const resp = await fetch(`https://fakestoreapi.com/products/${id}`); 
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

    return (
        <>
            {product === undefined ? (
                <h1>CARGANDO DETALLE DE PRODUCTO...</h1>
            ) : (
                <div>
                    <ItemDetail desc={product.description} title={product.title} price={product.price} image={product.image} id={product.id} />
                </div>
            )}
        </>
    )
}

export default ItemDetailContainer;