import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../validation.js';
import styledForm from './Form.module.css';

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza validaciones aquí y actualiza el estado de errores
    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);

    setErrors({ email: emailError, password: passwordError });

    // Si no hay errores, realiza otras acciones (envío del formulario, etc.)
    if (!emailError && !passwordError) {
      // Invoca la función login con los datos del usuario
      login(userData);
    }
  };

  return (
    <div className={styledForm.container}>

      <form onSubmit={handleSubmit} className='containerForm'>
        <label>
          Email:
        </label>
        <input name='email' type='text' placeholder='Ingresa tu email...' value={userData.email} onChange={handleChange} />
        {errors.email && <p className={styledForm.error}>{errors.email}</p>}
        <br></br>
        <label>
          Contraseña:
        </label>
        <input name='password' type='password' placeholder='Ingresa tu contraseña...' value={userData.password} onChange={handleChange} />
        {errors.password && <p className={styledForm.error}>{errors.password}</p>}

        <button type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
}
