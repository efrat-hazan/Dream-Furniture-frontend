import React, { useState } from 'react'
import '../styles/personalPro.css'
import allProducts from '../models/allProcducts';
import categories from '../models/categories';
import { Form, useLoaderData, useParams } from 'react-router-dom';
import cartItems from '../models/cartItems';
import { TextField, Alert, Snackbar } from '@mui/material';
import { saveCart } from '../API/UserController';


export default function PersonalProduction() {
  let { category, idd } = useParams();

  const [quan,satQuan]=useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  const item=useLoaderData();
  if (!item) return <div>מוצר לא נמצא</div>;

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const addToCart=async()=>{
    const add={ 
      id: item._id,
      quantity:quan,
    }
    try {
      const response = await saveCart(add);
    
       console.log('Server Response:', {
            status: response.status,
            data: response.data
        });
      if (response.status === 200) {
        setAlertType('success');
        setAlertMessage('המוצר נוסף בהצלחה לסל הקניות');
      } else {
        setAlertType('error');
        setAlertMessage(data.message);
      }
      setOpenAlert(true);
    } catch (error) {
      setAlertType('error');
      setAlertMessage('אירעה שגיאה בהוספת המוצר לסל');
      setOpenAlert(true);
    }
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
        <button className='sp' onClick={addToCart} id='btnAddToCart'> הוספה לסל </button>      </Form>
      </div>
      <Snackbar 
        open={openAlert} 
        autoHideDuration={10000} 
        onClose={handleCloseAlert}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlert} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
