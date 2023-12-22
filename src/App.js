
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const EMAIL = 'admin@admin.com';
  const PASSWORD = 'Admin1234!';

  // Envuelve la definición de login en useCallback
  const login = useCallback((userData) => {
    const { email, password } = userData;
    
    if (password === PASSWORD && email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }, [navigate, setAccess]); // Agrega todas las dependencias que utiliza login

  useEffect(() => {
    const handleLogin = () => {
      login({ email: 'anicolasfontanini@gmail.com', password: 'Cb212eed4' });
    };

    if (!access) {
      handleLogin();
    }

    // Lógica para redirigir cuando el acceso cambia
    return () => {
      !access && navigate('/');
    };
  }, [access, login, navigate]);


    // Lógica de cierre de sesión y redirección al login
    const handleLogout = () => {

      // Redirige al login
      navigate('/');
  }

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        console.error('Error al buscar personaje:', error);
      });
  };

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((character) => character.id !== id));
  };

  return (
    <div className='divContainer'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} handleLogout={handleLogout}/>}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;



