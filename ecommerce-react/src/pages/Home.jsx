import React from 'react';
import Anuncios from '../components/Anuncios';
import Categorias from '../components/Categorias';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Productos from '../components/Productos';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
        <Anuncios/>
        <Navbar/>
        <Slider/>
        <Categorias/>
        <Productos/>
        <Footer/>
        </div>
  )
}

export default Home