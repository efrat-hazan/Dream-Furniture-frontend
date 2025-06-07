import React, { useState } from 'react'
import '../styles/personalPro.css'
import allProducts from '../models/allProcducts';
import categories from '../models/categories';
import { Form, useLoaderData, useParams } from 'react-router-dom';
import cartItems from '../models/cartItems';
import { TextField } from '@mui/material';


export default function PersonalProduction() {
  let { category, idd } = useParams();

 
  // const list=categories.find(item=> category===item.name);
  // console.log(list)
  // const item=allProducts[(list.id)-1][parseInt(idd)-1];
  
  const item=useLoaderData();
  if (!item) return <div>מוצר לא נמצא</div>;
  const [quan,satQuan]=useState(1);
  const addToCart=()=>{
    const add={ 
      id: item.id,
      name:item.name,
      description:item.description,
      price:item.price,
      quantity:quan,
      discount:item.discount,
      image:item.image
    }
    cartItems.push(add);
    alert("ggg");
  }
console.log(`src/images/${item.image}`);
  return (
    <div className='conteinerForItem'>
      <div className='rightImg'>
    <img  src={`src/images/${item.image}`} alt={item.name} />
        {/* <img className='imgForItem' src={"src/images/"+item.image} alt={item.name} /> */}
      </div>
      <div className='leftDetail'>
        <span  id='titleItem'>{item.name}</span><br /><br />
        <span className='sp'>{item.description}</span><br />
       <del className='sp'>{item.price}</del> &nbsp;&nbsp; <span className='sp'>{Math.floor(item.price*(1-item.discount / 100))}</span><br />
       <Form>
       <TextField
          id="quantity"
          label=" כמות "
          type="number"
          color='f'
          value={quan}  onChange={(e) =>e.target.value=="0"? satQuan(Number(e.target.value)+1):satQuan(Number(e.target.value))}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <br /><br />
        <button className='sp' onClick={addToCart} id='btnAddToCart'> הוספה לסל </button>
      </Form>
      </div>
    </div>
  )
}
