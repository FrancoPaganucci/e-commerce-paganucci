import React from 'react';
import { useState } from 'react'

const Form = ({ finalizarCompra }) => {
    const [first_name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onNameChanges = (e) => { setName(e.target.value) }
    const onLastNameChanges = (e) => { setLastName(e.target.value) }
    const onEmailChanges = (e) => { setEmail(e.target.value) }

    const finalizarCompraHandler = (e) => {
        e.preventDefault();
        finalizarCompra(first_name, last_name, email);
    }

    return (
        <div>
            <form onSubmit={finalizarCompraHandler}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="fname" onChange={onNameChanges} />
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id="lname" onChange={onLastNameChanges} />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={onEmailChanges} />
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    );
};

export default Form;
