import { createContext, useContext, useState } from "react";
// CONTEXT
const context = createContext();
const { Provider } = context;

// necesito pasarle children porque en App.js. todo lo que está adentro de CustomProvider lo estoy pasando como prop.
export const CustomProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const [total_price, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);

    const isInCart = (title) => {
        return cart.find(prod => prod.title === title);
    };
    const addItem = (product, quantity) => {
        setTotalPrice(total_price + (product.price * quantity));
        if (isInCart(product.title)) {
            const prod_index = cart.findIndex(prod => prod.id === product.id);
            cart[prod_index].quantity += quantity;
        } else {
            const cart_copy = [...cart];
            product.quantity = quantity;
            cart_copy.push(product);
            setCart(cart_copy);
        }
    };
    const removeItem = (id, cart, quantity, price) => {
        const cart_copy = [...cart,];
        const cart_filtered = cart_copy.filter(prod => prod.id !== id);
        setCart(cart_filtered);
        // cartWidget
        const total_update = total - quantity;
        setTotal(total_update);
        // total price
        const new_total_price = total_price - price * quantity;
        setTotalPrice(new_total_price);
    };
    const clear = () => { 
        setCart([]);
        setTotal(0);
        setTotalPrice(0)
     };

    const ContextValue = {
        total,
        setTotal,
        cart,
        setCart,
        total_price,
        setTotalPrice,
        addItem,
        removeItem,
        clear
    }

    return(
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}

export const useContexto = () => {
    return useContext(context)
};
