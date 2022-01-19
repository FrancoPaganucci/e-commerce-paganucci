import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledListContainer } from './ItemListContainerStyled';
import { db } from "../../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore"
import { toast } from 'react-hot-toast'

const ItemListContainer = ({ greeting }) => {
    const [lista, setLista] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const products_collection = collection(db, "productos");
        const consulta = id !== undefined ? query(products_collection, where("category", "==", id)) : null;
        const docs = id !== undefined ? getDocs(consulta) : getDocs(products_collection);

        docs
            .then(({ docs }) => {
                setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch(err => {
                console.log(err)
                toast.error('Algo salió mal :(')
            })

    }, [id])

    return (
        <StyledListContainer>
            <h1>Bienvenido a Buy IT!</h1>
            <h1>{greeting}</h1>
            {lista.length < 1 ? (
                <h1 style={{ marginTop: 60 }}>CARGANDO PRODUCTOS...</h1>
            ) : (
                <ItemList items={lista} />
            )
        } </StyledListContainer>
    )
};

export default ItemListContainer;