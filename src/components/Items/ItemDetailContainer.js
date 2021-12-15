import React from 'react'
import ItemDetail from './ItemDetail';
import { useState } from 'react';

const ItemDetailContainer = () => {
    // necesito un estado inicial ({})
    //const [product, setProduct] = useState({});

    // necesito un render inicial para hacer un loader...
    
    // necesito ir a pedir la información = un efecto (con array de dependencia)
    /*useEffect(() => {
        const traerProducto = async () => {
            try {
                 const resp = await fetch(); 
                 const info = await resp.json();
                 return info;
            } catch (error) {
                console.log(error);
            }
            const producto = traerProducto()
            producto.then(response => {
                setProduct(response);
            })
        }
    }, [])*/
    return (
        <div>
            <ItemDetail /*product={product}*/ />
        </div>
    )
}

export default ItemDetailContainer;
