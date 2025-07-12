import React, {useEffect, useState} from 'react';
import '../styles/shoppingCart.css';
import { NavLink } from 'react-router';
import {useLoaderData} from 'react-router-dom';
// import cartItems from '../models/cartItems';
import VisualPay from '../ComponentsOther/VisualPay';
import CartTable from '../ComponentsOther/CartTable';
import DialogDelete from '../ComponentsOther/DialogDelete';
import { useSelector, useDispatch } from "react-redux";
import { setSumShpping } from '../Store/slices/sumShopping';
import { removeFromCart } from '../API/UserController';

export default function ShoppingCart() {
  console.log("1");
  
  let {cartItems, total} = useLoaderData();
  console.log("2");
  
  if (!cartItems || Object.keys(cartItems).length === 0) {
    cartItems = [];
  }
  const [items, setItems] = useState(cartItems);
  const sum = useSelector(state => state.sumShopping.sum);
  const dispatch = useDispatch();
  const [parId, setParId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const deleteItem =async (id) => {
    const response= await removeFromCart(id);
    setItems(response.cartItems);
    setParId(0);
  }

  useEffect(() => {
    let a = 0;
    for(let i = 0; i < items.length; i++)
      a += (items[i].price * items[i].quantity);
    dispatch(setSumShpping(a));
  }, [items, dispatch]);

  const openDialog = (id) => {
    setParId(id);
    const dialog = document.querySelector("dialog");
    dialog.showModal(); 
    setIsOpen(true);
  }
  const closeDialog1 = () => {
    closeDialog();
    deleteItem(parId);
  }
  
  const closeDialog = () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
    setIsOpen(false);
  }
  
  return (
    <div className='containerShoppingCart'>
      <div className='titleForSh'>
        <h2 className='h2ForTitle'> סל קניות </h2>
      </div>
      <h2 style={{display:sum===0?"block":"none"}}> העגלה ריקה בואו נמלא אותה </h2>
      <div className={sum===0?'disTable':"cart-container"}>
        <CartTable items={items} openDialog={openDialog} />
      </div>
      <div className='PaymentPart'> 
        <span className='spanForSh'> לתשלום: ₪{sum.toFixed(2)} </span><br />
        <NavLink className={sum===0?'disabledLink':''}
          onClick={(e)=>sum === 0 && e.preventDefault()}
          id='linkToPay' to='/payment'> מעבר לקופה </NavLink> <br /> 
        <VisualPay></VisualPay>
      </div>
      <DialogDelete closeDialog={closeDialog} closeDialog1={closeDialog1} />
    </div>
  );
}