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
        // actualizar cart widget
        console.log(product)
        const total_update = total + quantity;
        setTotal(total_update);

        if (isInCart(product.title)) {
            // modifico la total (cantidad total)
            const prod_index = cart.findIndex(prod => prod.id === product.id);
            cart[prod_index].quantity += quantity;
        } else {
            // actualizar lista de carrito
            const cart_copy = [...cart,];
            cart_copy.push(product);
            setCart(cart_copy);
        }
        console.log(total_price)
    };

    const removeItem = (id, cart, quantity) => {
        const cart_copy = [...cart,];
        const cart_filtered = cart_copy.filter(prod => prod.id !== id);
        console.log(`cart filetered: ${cart_filtered}`)
        setCart(cart_filtered);
        // cartWidget
        const total_update = total - quantity;
        setTotal(total_update);
    };

    const clear = () => { 
        setCart([]);
        setTotal(0);
     };

    const ContextValue = {
        total,
        cart,
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
