import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { FavouritesProvider } from './context/FavouritesContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavouritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavouritesProvider>
    </BrowserRouter>
  </StrictMode>
);
