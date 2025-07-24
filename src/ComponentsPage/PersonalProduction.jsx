import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  Alert,
  Snackbar,
  Box,
  Button,
  Divider
} from '@mui/material';
import { saveCart } from '../API/UserController';

export default function PersonalProduction() {
  const { category, idd } = useParams();
  const item = useLoaderData();

  const [quan, setQuan] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleCloseAlert = () => setOpenAlert(false);

  const addToCart = async (e) => {
    e.preventDefault();
    const add = {
      id: item._id,
      quantity: quan,
    };
    try {
      const response = await saveCart(add);
      if (response.status === 200) {
        setAlertType('success');
        setAlertMessage('המוצר נוסף בהצלחה לסל הקניות');
      } else {
        setAlertType('error');
        setAlertMessage(response.data.message || 'שגיאה לא ידועה');
      }
    } catch (error) {
      setAlertType('error');
      setAlertMessage('אירעה שגיאה בהוספת המוצר לסל');
    } finally {
      setOpenAlert(true);
    }
  };

  const primary = 'var(--primary-color)';
  const secondary = 'var(--secondary-color)';
  const stylesx = {
    bgcolor: secondary,
    color: primary,
    borderRadius: 2,
    px: 4,
    py: 1.5,
    fontWeight: 'bold',
    fontSize: 18,
    mt: 4,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '&:hover': {
      bgcolor: primary,
      color: secondary,
      border: `2px solid ${primary}`,
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      transform: 'translateY(-2px)',
    },
  };

  if (!item) return <div>מוצר לא נמצא</div>;

  return (
    <Box sx={{ flexGrow: 1, minHeight: 'calc(100vh - 200px)', mb: 6 }}>
      <Grid container spacing={2}>
        {/* תמונה */}
        <Grid item xs={12} size={6} md={6}  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
          <Box
            component="img"
            src={`https://dream-furniture-api-backend.onrender.com${item.imageUrl}`}
            alt={item.name}
            sx={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              borderRadius: 3,
              border: '1px solid rgba(185, 182, 182, 0.391)'
            }}
          />
        </Grid>

        {/* פרטי מוצר */}
        <Grid item xs={12} md={6} size={6} sx={{ px: { xs: 4, md: 8 }, py: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: 'var(--primay-font)', color: 'rgb(166, 163, 163)', mb: 3 }}>
            {item.name}
          </Typography>

          <Typography sx={{ color: 'rgb(166, 163, 163)', fontSize: '1.7rem', mb: 2 }}>
            {item.description}
          </Typography>

          <Typography sx={{ color: 'rgb(166, 163, 163)', fontSize: '1.7rem' }}>
            <del>{item.price} ₪</del>&nbsp;&nbsp;
            <span>{Math.floor(item.price * (1 - item.discount / 100))} ₪</span>
          </Typography>

          <Divider sx={{ my: 3 }} />

          <TextField
            id="quantity"
            label="כמות"
            type="number"
            value={quan}
            color="primary"
            onChange={(e) => setQuan(Math.max(1, Number(e.target.value)))}
            fullWidth
          />

          <Button sx={stylesx} fullWidth onClick={addToCart}>
            הוספה לסל
          </Button>
        </Grid>
      </Grid>

      {/* הודעה */}
      <Snackbar
        open={openAlert}
        autoHideDuration={10000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlert} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
