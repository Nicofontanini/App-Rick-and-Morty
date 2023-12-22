import React from 'react';
import { createRoot } from 'react-dom/client';  // Cambié la importación aquí
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';

// Reemplaza ReactDOM.createRoot con createRoot de "react-dom/client"
const root = createRoot(document.getElementById('root'));  // Cambié la llamada aquí

// Utiliza root.render para renderizar tu aplicación
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


