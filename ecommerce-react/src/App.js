import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carrito from './Carrito';
import Home from './Home';
import {CartProvider} from "react-use-cart"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CartProvider>
      <Home/>
      <Carrito/>
      </CartProvider>
      <Footer/>
    </>
  );
}

export default App;
