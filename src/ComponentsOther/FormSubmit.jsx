import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {setFirstName,setLastName,setAddress,setCity,
setPhone,setZip,setEmail,}from "../Store/slices/orserDetails"

export default function FormSubmit() {
  const dispatch=useDispatch()
   const st={//בשביל הכפתור
      backgroundColor: 'var(--secondary-color)',
      color: 'var(--primary-color)',
      margin: 2,
      '&:hover': {
        backgroundColor: 'var(--primary-color)',
        color: 'var(--secondary-color)',
      }
    }
   const [formValid, setFormValid] = useState(false);

   const handleSubmit = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget);
   const formFields = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      zipCode: data.get('zipCode'),
      address: data.get('address'),
      city: data.get('city'),
      phone: data.get('phone'),
      email: data.get('email')
    };

    console.log(formFields);
  };
  return (
    <>
       <Box component="form"
        sx={{ '& .MuiTextField-root': { m: 2, width: '50%' } }}
        onSubmit={handleSubmit}>
        <div>
            
          <TextField required label=" שם פרטי " name='firstName'
          variant="standard" helperText="" color={')'}  />

          <TextField required label=" שם משפחה " name='lastName'
          variant="standard"  helperText="" color={')'}  />

          <TextField label=" מדינה/ איזור " defaultValue=" ישראל "
          variant="standard" color={'v'}
          slotProps={{ input: {readOnly: true,},}} />

          <TextField required label=" מיקוד  " name='zipCode'
          variant="standard" helperText="" color={')'}  />

          <TextField  required label=" כתובת  " name='address'
          variant="standard" helperText="" color={')'}  />

          <TextField required label=" עיר  " name='city'
          variant="standard" helperText="" color={')'}  />

          <TextField required type='tel' label=" טלפון " name='pone'
         //  slotProps={{ pattern: "[0-9]{3}-[0-9]{7}",maxLength: 10 } }
          variant="standard" helperText="" color={'v'}  />

          <TextField required type='email' label=" מייל " name='email'
          helperText=""  variant="standard" color={'a'}  />
         <br />
         <Button type="submit" variant="contained" sx={st}> שליחה </Button>

         </div>

      </Box>
    </>
  )
}
