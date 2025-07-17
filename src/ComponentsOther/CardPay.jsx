import { Box, InputLabel, MenuItem, Select, TextField, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumCard, setYear, setMonth, setCvv } from "../Store/slices/orserDetails";

export default function CardPay({ errors = {}, onValidate }) {
  const dispatch = useDispatch();// for redux
  const orderDetails = useSelector(state => state.orderDetails);

  // Credit card formatting function
  const formatCreditCard = (value) => {
    const v = value.replace(/\D/g, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  // Internal validation
  function validate() {
    const newErrors = {};
    if (!orderDetails.numCard || orderDetails.numCard.replace(/\D/g, '').length !== 16) newErrors.numCard = 'מספר אשראי לא תקין';
    if (!orderDetails.month) newErrors.month = 'חודש חובה';
    if (!orderDetails.year) newErrors.year = 'שנה חובה';
    if (!orderDetails.cvv || !/^\d{3,4}$/.test(orderDetails.cvv)) newErrors.cvv = 'CVV לא תקין';
    if (onValidate) onValidate(newErrors);
    return Object.keys(newErrors).length === 0;
  }

 //So that the function can be called from payment
  useEffect(() => {
    window.cardPayValidate = validate;
    return () => { delete window.cardPayValidate; }
  });

  return (
    <Box sx={{ '& .MuiTextField-root': { m: 1, width: '50%' } }}>
      <TextField
        required
        label="מספר אשראי"
        name="numCard"
        placeholder="xxxx xxxx xxxx xxxx"
        value={orderDetails.numCard}
        onChange={e => dispatch(setNumCard(formatCreditCard(e.target.value)))}
        error={!!errors.numCard}
        helperText={errors.numCard}
        slotProps={{
            input: {
                maxLength: 19,
                pattern: '[0-9]*',
                autoComplete: 'off' 
    }
  }}
      />
      <FormControl sx={{ m: 1, width: '50%' }}>
        <InputLabel id="month-label">חודש</InputLabel>
        <Select
          labelId="month-label"
          value={orderDetails.month}
          label="חודש"
          onChange={e => dispatch(setMonth(e.target.value))}
          error={!!errors.month}
        >
          {[...Array(12)].map((_, i) => (
            <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: '50%' }}>
        <InputLabel id="year-label">שנה</InputLabel>
        <Select
          labelId="year-label"
          value={orderDetails.year}
          label="שנה"
          onChange={e => dispatch(setYear(e.target.value))}
          error={!!errors.year}
        >
          {[...Array(11)].map((_, i) => {
            const year = 2025 + i;
            return <MenuItem key={year} value={year}>{year}</MenuItem>
          })}
        </Select>
      </FormControl>
      <TextField
        required
        label="CVV"
        name="cvv"
        type="password"
        value={orderDetails.cvv}
        onChange={e => dispatch(setCvv(e.target.value))}
        error={!!errors.cvv}
        helperText={errors.cvv}
        inputProps={{ maxLength: 4 }}
      />
    </Box>
  );
}