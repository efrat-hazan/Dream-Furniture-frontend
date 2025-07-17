import { useEffect, useState } from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider, Box, CircularProgress } from '@mui/material';
import { getOrderByUserId } from '../API/OrderController';
import { NavLink} from 'react-router'
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
    try {
      const data = await getOrderByUserId();
      setOrders(data || []);
    } catch (err) {
      setOrders([]);
    } finally {
      setLoading(false);
    }
    };
    fetchOrders();
  }, []);

   const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 5 }}>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          החשבון שלי
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>הזמנה</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>תאריך</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>סטטוס </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>פריטים </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>סך הכל</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">לא נמצאו הזמנות</TableCell>
                  </TableRow>
                ) : (
                  orders.map((order) => (
                    <TableRow key={order._id || order.id}>
                      <TableCell align="right" sx={{ color: '#888' }}>
                        <NavLink to={`/specificOrder/${order.orderid}`} style={{ color: '#888' }}>#{order.orderid}
                      </NavLink></TableCell>
                      <TableCell align="right">{formatDate(order.date)}</TableCell>
                      <TableCell align="right"> {order.statusOrder ? "הושלם":"בתהליך"}</TableCell>
                      <TableCell align="right"> {order.items?.map(item => (
                          <div key={item._id}>
                            {item.name} × {item.quantity}
                          </div>
                        ))}</TableCell>
                      <TableCell align="right">
                          {order.sum ? order.sum.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' }) : ''}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}