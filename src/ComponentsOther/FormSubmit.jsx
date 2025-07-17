import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstName, setLastName, setAddress, setCity,
  setPhone, setZip, setEmail
} from "../Store/slices/orserDetails";

export default function FormSubmit({ errors = {}, onValidate }) {
  const dispatch = useDispatch();
  const orderDetails = useSelector(state => state.orderDetails);

  // Internal validation
  function validate() {
    const newErrors = {};
    if (!orderDetails.firstName) newErrors.firstName = 'שדה חובה';
    if (!orderDetails.lastName) newErrors.lastName = 'שדה חובה';
    if (!orderDetails.zip) newErrors.zip = 'שדה חובה';
    if (!orderDetails.address) newErrors.address = 'שדה חובה';
    if (!orderDetails.city) newErrors.city = 'שדה חובה';
    if (!orderDetails.phone || !/^0\d{1,2}-?\d{7}$/.test(orderDetails.phone)) newErrors.phone = 'טלפון לא תקין';
    if (!orderDetails.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(orderDetails.email)) newErrors.email = 'מייל לא תקין';
    if (onValidate) onValidate(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // List the function for window so that Payment can call it
  useEffect(() => {
    window.formSubmitValidate = validate;
    return () => { delete window.formSubmitValidate; }
  });

  return (
    <Box sx={{ '& .MuiTextField-root': { m: 2, width: '50%' } }}>
      <TextField
        required label="שם פרטי" name='firstName'
        variant="standard"
        value={orderDetails.firstName}
        onChange={e => dispatch(setFirstName(e.target.value))}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        required label="שם משפחה" name='lastName'
        variant="standard"
        value={orderDetails.lastName}
        onChange={e => dispatch(setLastName(e.target.value))}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        label="מדינה/איזור" defaultValue="ישראל"
        variant="standard"
        InputProps={{ readOnly: true }}
      />
      <TextField
        required label="מיקוד" name='zip'
        variant="standard"
        value={orderDetails.zip}
        onChange={e => dispatch(setZip(e.target.value))}
        error={!!errors.zip}
        helperText={errors.zip}
      />
      <TextField
        required label="כתובת" name='address'
        variant="standard"
        value={orderDetails.address}
        onChange={e => dispatch(setAddress(e.target.value))}
        error={!!errors.address}
        helperText={errors.address}
      />
      <TextField
        required label="עיר" name='city'
        variant="standard"
        value={orderDetails.city}
        onChange={e => dispatch(setCity(e.target.value))}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        required type='tel' label="טלפון" name='phone'
        variant="standard"
        value={orderDetails.phone}
        onChange={e => dispatch(setPhone(e.target.value))}
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <TextField
        required type='email' label="מייל" name='email'
        variant="standard"
        value={orderDetails.email}
        onChange={e => dispatch(setEmail(e.target.value))}
        error={!!errors.email}
        helperText={errors.email}
      />
    </Box>
  );
}