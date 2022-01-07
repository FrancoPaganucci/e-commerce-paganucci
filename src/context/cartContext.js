import { createContext, useContext, useState } from "react";
// CONTEXT
const context = createContext();
const { Provider } = context;


// necesito pasarle children porque en App.js. todo lo que está adentro de CustomProvider lo estoy pasando como prop.
export const CustomProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const [total_price, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id);
    };
    const addItem = (product, quantity) => {
        console.log("se ejecuta add item");
        // actualizar lista de carrito
        const cart_copy = [...cart,];
        cart_copy.push(product);
        setCart(cart_copy);
        // actualizar cart widget
        const total_update = total + quantity;
        setTotal(total_update);

        if (isInCart(product.id)) {
            // modifico la total (cantidad total)
            const existing_prod = cart.find(prod => prod.id === product.id);        
        } else {
            // crear copia del array, pushear a eso y actualizar con setCarrito(copiaActualizada)
        }
    };
    const removeItem = (id, cart) => {
        const item_remove = cart.find(prod => prod.id === id);
        const cart_copy = cart.filter(prod => {
            return prod.id != item_remove.id;
        });
        setCart(cart_copy);
    };
    const clear = () => { setCart([]); };

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


/* 
carrito: limpiar carrito, borrar del carrito, 
item detail: agregar al carrito, usar los hooks (en onAdd va a estar agregarAlCarrito, y le pasas cantidad y producto)
*/