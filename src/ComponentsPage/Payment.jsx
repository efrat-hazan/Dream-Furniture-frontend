import * as React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, Box } from '@mui/material';
import FormSubmit from '../ComponentsOther/FormSubmit';
import CardPay from '../ComponentsOther/CardPay';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetOrderDetails } from '../Store/slices/orserDetails';
import { addOrder } from '../API/OrderController';


export default function Payment() {
  const [formErrors, setFormErrors] = React.useState({});
  const [cardErrors, setCardErrors] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  // פונקציות שמקבלות הודעות שגיאה מהקומפוננטות
  const handleFormErrors = (errors) => setFormErrors(errors);
  const handleCardErrors = (errors) => setCardErrors(errors);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // נבצע ולידציה בכל קומפוננטה
    const formValid = window.formSubmitValidate();
    const cardValid = window.cardPayValidate();
    if (formValid && cardValid) {
      const status= await addOrder();
          dispatch(resetOrderDetails());
          alert('התשלום עבר בהצלחה!');          
          navigate('/orders')
        
    }
   
  };

  return (
    <>
      <h2 className='h2ForTitle'> עמדת תשלום </h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}size={6} md={6}>
            <FormSubmit errors={formErrors} onValidate={handleFormErrors} />
          </Grid>
          <Grid item  size={6} md={6}>
            <CardPay errors={cardErrors} onValidate={handleCardErrors} />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" sx={stylesx}>
            שליחה
          </Button>
        </Box>
      </form>
    </>
  );
}