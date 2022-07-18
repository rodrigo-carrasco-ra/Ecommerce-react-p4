import React from 'react'
import { useCart } from 'react-use-cart'

const ItemCard = (props) => {
    const {addItem}= useCart();
  return (
          <div class="col-11 col-m6 col-lg-3 mx-0 mb-4" >
              <div  class="card p-0 overflow-hidden h-100 shadow" >
                  <img src={props.img} class='card-img-top img-fluid' alt='' />
                  <div class="card-body text-center">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">${props.price}</p>
                      <p class="card-text">Stock disponible: {props.quantity}</p>
                      <p class="card-text">Ultima actualizacion: {props.date}</p>
                      <button class="btn btn-success" onClick={() =>addItem(props.item)}>Agregar al carrito</button>
                  </div>
          </div>
    </div>
  )
}

export default ItemCard