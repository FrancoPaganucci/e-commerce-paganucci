import { createContext, useContext, useState } from "react";
// CONTEXT
const contexto = createContext();
const { Provider } = contexto;


// necesito pasarle children porque en App.js. todo lo que está adentro de CustomProvider lo estoy pasando como prop.
export const CustomProvider = ({children}) => {
    const [cantidad_total, SetCantidadTotal] = useState(0);
    const [carrito, SetCarrito] = useState([]);


    const isInCarrito = (id) => {
        //return true ? false buscando si está el producto
    };

    const agregarAlCarrito = (producto, cantidad) => {
        if (isInCarrito()) {
            // modifico la cantidad
        } else {
            // crear copia del array, pushear a eso y actualizar con setCarrito(copiaActualizada)
        }
    };

    const borrarDelCarrito = (id) => {
        
    };

    const limpiarCarrito = () => { SetCarrito([]); };

    const ContextValue = {
        cantidad_total,
        carrito,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito
    }

    return(
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}


export const useContexto = () => {
    return useContext(contexto)
};



/* 

carrito: limpiar carrito, borrar del carrito, 

item detail: agregar al carrito, usar los hooks (en onAdd va a estar agregarAlCarrito, y le pasas cantidad y producto)

*/