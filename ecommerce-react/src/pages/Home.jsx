import React from 'react';
import Anuncios from '../components/Anuncios';
import Categorias from '../components/Categorias';
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
        </div>
  )
}

export default Home