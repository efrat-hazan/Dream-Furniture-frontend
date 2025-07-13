import React, { useEffect, useState } from 'react';
import {
  Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
   Typography, Grid, Paper
} from '@mui/material';
import { getAllUsers } from '../API/UserController';
import { getAllOrders } from '../API/OrderController';
import Addproduct from '../ComponentsOther/Addproduct';

export default function AdminDashboard() {
  const [openDialog, setOpenDialog] = useState(null); // null | 'customers' | 'orders' | 'addProduct'
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);   
  const [numbers, setNumbers] = useState(0)   
  const handleClose = () => setOpenDialog(null);
  const primary = 'var(--primary-color)';
  const secondary = 'var(--secondary-color)';
  const stylesx={
      bgcolor: secondary,color: primary,borderRadius: 2,px: 4,
      py: 1.5,fontWeight: 'bold',fontSize: 18,
      '&:hover': {
         bgcolor: primary,color: secondary,
         border: `2px solid ${primary}`,transition: 'all 0.3s',
      },
   }
  
 useEffect(() => {
  const giveItems = async () => {
    const users = await getAllUsers();
    const ordersData = await getAllOrders();
    setUsers(users);
    setOrders(ordersData); // <-- רק אחרי שזה קורה, useEffect הבא יופעל
  };
  giveItems();
}, []);

// שלב 2: התחלת המספרים רק אחרי ש־orders קיבל ערך
useEffect(() => {
  if (orders.length === 0) return;

  const interval = setInterval(() => {
    setNumbers(prev => {
      if (prev >= orders.length) {
        clearInterval(interval);
        return prev;
      }
      return prev + 1;
    });
  }, 100);

  return () => clearInterval(interval);
}, [orders]); // מאזין לשינויים ב־orders
  return (
   <>
   
   <p>{numbers}</p>
  <Typography variant="h2" sx={{color:"#888", }}  gutterBottom>DASHBOARD </Typography>

   <Box  justifyContent="center"   display="flex"
  alignItems="center" minHeight="20vh" >
      <Grid container spacing={3} maxWidth="md">   
      <Paper elevation={3}>
        <Button sx={stylesx} fullWidth variant="contained" onClick={() => setOpenDialog('customers')}>
          הצגת לקוחות
        </Button>
      </Paper>    
   
      <Paper elevation={3}>
        <Button sx={stylesx} fullWidth variant="contained" onClick={() => setOpenDialog('orders')}>
          הצגת הזמנות
        </Button>
      </Paper>
   
   
      <Paper elevation={3}>
        <Button sx={stylesx} fullWidth variant="contained" onClick={() => setOpenDialog('addProduct')}>
          הוספת מוצר
        </Button>
      </Paper>
    
  </Grid>

   
      <Dialog open={openDialog === 'customers'} onClose={handleClose}>
        <DialogTitle>רשימת לקוחות</DialogTitle>
        {console.log("jjj")}
        <DialogContent>
         {
            users.map((item,index)=>(
               <Typography  key={index}>
                  {item.name} | ✉️ {item.email}
               </Typography>
            ))
         }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>

      {/* הצגת הזמנות */}
      <Dialog open={openDialog === 'orders'} onClose={handleClose}>
        <DialogTitle>רשימת הזמנות</DialogTitle>
        <DialogContent>
          {
            orders.map((item,index)=>(
               <Typography  key={index}>
                  {item.orderid} |  {item.sum.toFixed(2)}
               </Typography>
            ))
         }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>

      {/* הוספת מוצר */}
      <Addproduct openDialog={openDialog} handleClose={handleClose} stylesx={stylesx} />
      
    </Box>
      <Typography  variant="h4"  sx={{color:"#888", }}>{numbers}</Typography>
      <Typography  variant="h5"  sx={{color:"#888", }}>ההזמנות שלנו</Typography>
     <Typography variant="h4" sx={{color:"#888", }}   gutterBottom>עסקים גדולים נוצרים ממעשים קטנים </Typography>
 
    </>
  );
}
