import React from 'react'
import './popular.css'
import data_product from '../assests/popular'
import Item from '../item/item'

const Popular = () => {
 
  return (
   <div className="popular">
      <h1>Popular Categories </h1>
      <hr />
    <div className="popular-item">
     {data_product.map((item,i)=> {
      return <Item  key={i} id={item.id} product={item.product} image={item.img} description={item.state} />
     })}
    </div>
   </div>
  )
}

export default Popular

