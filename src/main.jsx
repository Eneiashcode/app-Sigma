import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Aponta para o arquivo principal da aplicação
import './index.css'; // Certifique-se de ter o Tailwind configurado

// Montando a aplicação no elemento com id "app"
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
