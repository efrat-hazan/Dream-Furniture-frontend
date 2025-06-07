import React from 'react';
import Button from '@mui/material/Button';

export default function DialogDelete({closeDialog, closeDialog1}) {
   const st={backgroundColor: 'var(--secondary-color)',
      color: 'var(--primary-color)',
      borderRadius: '8px',
      padding: '10px 20px',margin:'10px',
      '&:hover': {
        backgroundColor: 'var(--primary-color)',
        color: 'var(--secondary-color)',
        transform: 'translateY(-2px)',
        transition: 'all 0.3s ease'}};
  return (
    <dialog>
      <p className='pForDialog'> תרצה למחוק את הפריט מהסל קניות </p>
      <Button sx={st} variant="contained" size="small" onClick={closeDialog1} >  אישור </Button>
      <Button sx={st} variant="contained" size="small" onClick={closeDialog} >  ביטול </Button> 
    </dialog>
  );
}