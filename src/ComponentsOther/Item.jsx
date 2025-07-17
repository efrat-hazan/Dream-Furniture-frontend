import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Item(props) {
  const {obg}=props;

  return (
    <>
    <div>
      <div className='divPageForItem'>
      <NavLink to={`/personalProduction/${obg._id}`}>
      <img src={`http://localhost:3000${obg.image}`} className='itemForPageCategory'   loading="lazy" alt={obg.name}/><br />
            <p>{obg.name}</p> <br />
         </NavLink></div>
         <br />
         <del className='pForItem'>{obg.price}₪</del>&nbsp; &nbsp;
         <p className='pForItem' >{Math.ceil(obg.price * (1 - obg.discount / 100))}₪</p>
      </div>
    </>
  )
}
