import React from 'react';
import { useState } from 'react'

const Form = ({ finalizarCompra }) => {
    const [first_name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onNameChanges = (e) => { setName(e.target.value) }
    const onLastNameChanges = (e) => { setLastName(e.target.value) }
    const onEmailChanges = (e) => { setEmail(e.target.value) }

    console.log(`name ahora es: ${first_name}`)
    console.log(`last name ahora es: ${last_name}`)
    console.log(`email ahora es: ${email}`)

    const finalizarCompraHandler = () => {
        finalizarCompra(first_name, last_name, email)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="fname" onChange={onNameChanges} />
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id="lname" onChange={onLastNameChanges} />
                <label htmlFor="email">E-mail</label>
                <input type="email" id="e-mail" onChange={onEmailChanges} />

                <button onClick={finalizarCompraHandler}>Finalizar Compra</button>
            </form>
        </div>
    );
};

export default Form;
