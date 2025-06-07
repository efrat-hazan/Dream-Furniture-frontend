import { Box, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { CheckBox } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {setNumCard, setYear, setMonth, setCvv} from "../Store/slices/orserDetails"

export default function CardPay() {
    // States
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const label = { inputProps: { 'aria-label': ' שירות הרכבה ' } };


    // Arrays for select options
    const mo = Array.from({ length: 12 }, (_, i) => i + 1);
    const ye = [];
    for (let i = 2025; i < 2036; i++) {
        ye[i] = i;
    }

    // Credit card formatting function
    const formatCreditCard = (value) => {
        const v = value.replace(/\D/g, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    // Event handlers
    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        if (value.replace(/\D/g, '').length <= 16) {
            setCardNumber(formatCreditCard(value));
        }
    };

    const handleChangeMo = (event) => {
        setMonth(event.target.value);
    };

    const handleChangeYe = (event) => {
        setYear(event.target.value);
    };

    return (
        <div>
            <Box 
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '50%' } }}
                autoComplete="off"
            >
                <TextField 
                    required 
                    id="num-card" 
                    label="מספר אשראי" 
                    name="num-card" 
                    placeholder="xxxx xxxx xxxx xxxx" 
                    color={')'} 
                    inputProps={{
                        maxLength: 19,
                        pattern: '[0-9]*'
                    }}
                    onChange={handleCardNumberChange}
                    error={cardNumber.replace(/\D/g, '').length > 0 && cardNumber.replace(/\D/g, '').length !== 16}
                    helperText={
                        cardNumber.replace(/\D/g, '').length > 0 && 
                        cardNumber.replace(/\D/g, '').length !== 16 ? 
                        "נדרשות 16 ספרות" : ""
                    }
                />

                <FormControl sx={{ m: 1, width: '50%' }}>
                    <InputLabel id="demo-simple-select-label" color={')'}> חודש </InputLabel>
                    <Select
                        color={')'}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        label=" חודש "
                        onChange={handleChangeMo}
                    >
                        {mo.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: '50%' }}>
                    <InputLabel id="demo-simple-select-label" color={')'}> שנה </InputLabel>
                    <Select
                        color={')'}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label=" שנה "
                        onChange={handleChangeYe}
                    >
                        {ye.map((item) => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField 
                    id="cvv" 
                    label="cvv" 
                    name="cvv" 
                    placeholder="cvv"
                    type="password"
                    maxLength={3} 
                    color={')'}
                />
                <br />
      <FormControlLabel control={<Checkbox  />} label=" אפשרות הרכבה +20 שח " />
      
            </Box>
        </div>
    );
}