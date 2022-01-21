import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { StyledCartForm } from './CartFormStyled';

const CartForm = ({ finalizarCompra }) => {

    const finalizarCompraHandler = ({fname, lname, email}) => {
        finalizarCompra(fname, lname, email);
    }

    return (
        <Formik
            onSubmit={(values, { resetForm }) => {
                finalizarCompraHandler(values)
                resetForm()
            }}
            initialValues={{ fname: '', lname: '', email: '' }}
            validate={(values) => {
                const errores = {};

                if (!values.fname) {
                    errores.fname = "Por favor, ingresa tu nombre"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.fname)) {
                    errores.fname = "El nombre solo puede contener letras y espacios"
                }

                if (!values.lname) {
                    errores.lname = "Por favor, ingresa tu apellido"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lname)) {
                    errores.lname = "El apellido solo puede contener letras y espacios"
                }

                if (!values.email) {
                    errores.email = "Por favor, ingresa tu correo electrónico"
                } else if (!/^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/.test(values.email)) {
                    errores.email = "Debe ingresar un formato de correo electrónico (ejemplo@mail.com)"
                }

                return errores;
            }}
        >
            {({ errors }) => (
                <StyledCartForm>
                    <Form className='form-cnt'>
                        <h2>Completa con tus datos de pago</h2>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="fname">Nombre</label>
                            <Field
                                className="field"
                                type="text"
                                id="fname"
                                name="fname"
                            />
                            <ErrorMessage  name="fname" component={() => {
                                return <div className='error-msg'>{errors.fname}</div>
                            }} />
                        </div>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="lname">Apellido</label>
                            <Field
                                className="field"
                                type="text"
                                id="lname"
                                name="lname"
                            />
                            <ErrorMessage name="lname" component={() => {
                                return <div className='error-msg'>{errors.lname}</div>
                            }} />
                        </div>
                        <div className='div-cnt'>
                            <label className='label' htmlFor="email">E-mail</label>
                            <Field
                                className="field"
                                type="text"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component={() => {
                                return <div className='error-msg'>{errors.email}</div>
                            }} />
                        </div>
                        <button className='btn-submit' type="submit">Finalizar Compra</button>
                    </Form>
                </StyledCartForm>
            )}
        </Formik>
    );
};

export default CartForm;

