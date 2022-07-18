import React from 'react'
import ItemCard from './ItemCard' 
import data from './data'

const Home = () => {
  return (
    <>
        <h1 className='text-center mt-3'> Productos Disponibles</h1>]
            <section className='py-4 container'>
            <div className='row justify-content-center'>
                {data.productData.map((item,index)=>{
                    return(
                        <ItemCard 
                        img={item.img} 
                        title={item.title} 
                        quantity={item.quantity} 
                        price={item.price} 
                        date={item.date} 
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