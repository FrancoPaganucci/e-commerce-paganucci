import { useState } from 'react';
import { useContexto } from '../../context/cartContext';
import { StyledItemCount } from './ItemCountStyled';

const ItemCount = ({ stock, initial, onAdd, this_product}) => {
    let [contador, setContador] = useState(initial);
    const { addItem } = useContexto(); 
    
    function restarCounter() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    function sumarCounter() {
        if (contador < stock) {
            setContador(contador + 1); 
        }
    }
    const addToCartHandler = () => {
        onAdd(contador, setContador);
        addItem(this_product, contador);
    }
    return (
        <StyledItemCount>
            <div className="stock-setter-cnt">
                <button onClick={restarCounter}>-</button>
                <p className="counter">{contador}</p>
                <button onClick={sumarCounter} >+</button>
            </div>
            <button className="agregar-al-carrito-btn" onClick={addToCartHandler}>Agregar al carrito</button>
        </StyledItemCount>
    )
}

export default ItemCount
