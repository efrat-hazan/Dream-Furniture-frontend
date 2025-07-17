import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import {Box,Paper,Typography,Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Button,Divider,Snackbar, Alert} from '@mui/material';
import { updateOrderStatus } from '../API/OrderController';

export default function SpecificOrder() {
   const order = useLoaderData();
   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
   const [orderStatus, setOrderStatus] = useState(order.statusOrder);
   const primary = 'var(--primary-color)';
   const secondary = 'var(--secondary-color)';
   const stylesx={
      bgcolor: primary,color: secondary,borderRadius: 2,px: 4,
      py: 1.5,fontWeight: 'bold',fontSize: 18,
      '&:hover': {
         bgcolor: secondary,color: primary,
         border: `2px solid ${primary}`,transition: 'all 0.3s',
      },
   }

   const OrderConfirmation = async () => {
  const data = await updateOrderStatus(order.orderid);
  setSnackbar({
    open: true,
    message: data.message,
    severity: data.status === 200 ? 'success' : 'error'
  });
  if (data.status === 200) {
    setOrderStatus(true);
  }
  setTimeout(() => setSnackbar({ ...snackbar, open: false }), 10000);
};
   

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 5, mb: 10 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center" color={secondary}>
          פרטי הזמנה #{order.orderid}
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: secondary, height: 2 }} />
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: primary }}>מוצר</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: primary }}>כמות</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: primary }}>מחיר ליחידה</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: primary }}>מחיר סופי</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.items?.map((item) => (
                <TableRow key={item._id}>
                  <TableCell align="right">
                    {console.log(item._id)}
                    <NavLink to={`/personalProduction/${item.productId}`}> {item.name}</NavLink></TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {item.price?.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                  </TableCell>
                  <TableCell align="right">
                    {(item.finalPrice * item.quantity)?.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="left" sx={{ fontWeight: 'bold', color: secondary }}>
                  סה"כ להזמנה:
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: secondary }}>
                  {order.sum?.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={stylesx}
            onClick={OrderConfirmation}
            disabled={orderStatus === true}

          >
            {orderStatus === true ? 'ההזמנה התקבלה' : 'אישור קבלת ההזמנה'}
        </Button>
        </Box>
        <Snackbar
          open={snackbar.open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={snackbar.severity}
            sx={{ width: '100%' }}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      
      </Paper>
    </Box>
  );
}