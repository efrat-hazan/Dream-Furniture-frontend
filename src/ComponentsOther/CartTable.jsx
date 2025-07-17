import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseCartItemQuantity, saveCart } from '../API/UserController';

export default function CartTable({items, openDialog}) {

  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const changeQuantity =async (id, delta) => {
    const prevQuantity = quantities[id] || 1;
    const newQuantity = Math.max(1, prevQuantity + delta);
    if (newQuantity === prevQuantity) return
    // עדכון סטייט
    setQuantities(prev => ({
      ...prev,
      [id]: newQuantity
    }));

    const itm= {
      id: id,
      quantity:newQuantity
    }

    let response;
    if(delta>0){
       response = await saveCart(itm);
    }
    else 
    {
      response =await decreaseCartItemQuantity(itm);
      setQuantities(prev => {
      return { ...prev, [id]: prevQuantity };
    });
    }
    alert(response.message);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"> מוצר</TableCell>
            <TableCell align="center">מחיר</TableCell>
            <TableCell align="center">כמות</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img 
                  src={`http://localhost:3000${item.image}`} 
                  alt={item.name} 
                  className="cart-item-image" 
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="center">₪{item.price}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => changeQuantity(item.id, -1)}>
                  <RemoveIcon />
                </IconButton>
                <span style={{ margin: '0 8px' }}>{quantities[item.id]}</span>
                <IconButton onClick={() => changeQuantity(item.id, 1)}>
                  <AddIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => openDialog(item.id)} className="delete-button">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}