import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartTable({items, openDialog}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell> מוצר</TableCell>
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
                  src={"src/images/"+item.image} 
                  alt={item.name} 
                  className="cart-item-image" 
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="center">₪{item.price}</TableCell>
              <TableCell align="center">
                <input className='num-for-item' type="number" defaultValue={item.quantity} />
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