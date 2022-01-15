import React from 'react'
import { useContexto } from '../../context/cartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { StyledCartItemContainer } from './CartStyled';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebase";

const CartItemContainer = () => {
    const { cart, clear, total_price } = useContexto();
    
    const finalizarCompra = async () => {
        console.log("guardando la compra en la db");

        const ventasCollection = collection(db, "ventas")
        try {
            const result = await addDoc(ventasCollection, {
                buyer : {
                    name : "Juan",
                    lastName : "Perez",
                    email : "mail@mail"
                },
                items : cart ,
                date : serverTimestamp(),
                total : total_price
            })
            console.log(result)
            clear();
            return result
        } catch (error) {
            console.log(error)
        }
        /*const result = await addDoc(ventasCollection, {
            buyer : {
                name : "Juan",
                lastName : "Perez",
                email : "mail@mail"
            },
            items : cart ,
            date : serverTimestamp(),
            total : total_price
        }).then(resultado => {
            console.log(resultado);
            console.log("Document written with ID: ", resultado.id)
            clear();
        }).catch(err => console.log(err));*/
        
    }


    return (
        <StyledCartItemContainer>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <CartItem key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
                        ))}
                    </ul>
                    <div className="bottom-div">
                        <h3 className='total-price'>Total: ${total_price.toFixed(2)}</h3>
                        <button className='btn-empty-cart' onClick={finalizarCompra}>Finalizar compra</button>
                        <button className='btn-empty-cart' onClick={() => { clear() }}>Vaciar carrito</button>
                    </div>
                </>
            ) : (
                <>
                <div className='empty-cart-container'>
                    <h1 className='cart-title'>No hay productos en el carrito</h1>
                    <Link to='/products' className='shop-link'>Ver Catálogo</Link>
                </div>
                </>
            )
            }</StyledCartItemContainer>
    )
}

export default CartItemContainer;
