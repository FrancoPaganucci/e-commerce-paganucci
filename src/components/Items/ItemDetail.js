import React from 'react'
import ItemCount from './ItemCount';
import { toast } from 'react-hot-toast';

const ItemDetail = () => {
    const onAdd = (contador, setContador) => {
        if (contador > 1) {
            toast.success(`El usuario agregó ${contador} items al carrito`);
        } else {
            toast.success(`El usuario agregó ${contador} item al carrito`);
        }
        setTimeout(() => {
            setContador(0)
        }, 3200)
    }
    // acá adentro va a estar el ItemCount
    return (
        <div>
            <h1>Item Detail</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail;
