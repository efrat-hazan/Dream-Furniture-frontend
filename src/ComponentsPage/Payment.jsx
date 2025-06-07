import * as React from 'react';
import '../styles/payment.css'
import { Grid } from '@mui/material';
import FormSubmit from '../ComponentsOther/FormSubmit';
import { grey } from '@mui/material/colors';
import CardPay from '../ComponentsOther/CardPay';


export default function Payment() {
const st={borderColor:grey}

  return (
    <>
    <h2 className='h2ForTitle'> עמדת תשלום </h2>
    <Grid container spacing={2}>
      <Grid sx={st} size={6}>
     <FormSubmit></FormSubmit>
     </Grid>
     <Grid  size={6}>
         <CardPay></CardPay>
     </Grid>
     </Grid>
    </>
  )
}
