import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); 
    
    useEffect(() => {
        const products_collection = collection(db, "productos");
        const refDoc = doc(products_collection, id);
        getDoc(refDoc)
            .then(prod => {setProduct(prod.data())})
            .catch(err => console.log(err))
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
