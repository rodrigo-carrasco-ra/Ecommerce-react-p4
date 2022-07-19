import React from 'react'
import ItemCard from './ItemCard' 
import marines from './marines'

const Home = () => {
  return (
    <>
        <h1 className='text-center mt-3' style={{paddingTop:'10rem'}}> Productos Disponibles</h1>
            <section className='py-4 container'>
            <div className='row justify-content-center'>
                {marines.map((item,index)=>{
                    return(
                        <ItemCard 
                        img={item.img} 
                        title={item.title} 
                        quantity={item.quantity} 
                        price={item.price} 
                        desc={item.desc} 
                        item={item} 
                        key={index} 
                        />
                    )
                })}
            </div>
        </section >
    </>
  )
}

export default Home