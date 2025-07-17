import {useState} from 'react'
import { addProduct } from '../API/ProductsController';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,TextField
} from '@mui/material';

export default function Addproduct(props) {
  const {openDialog,handleClose,stylesx}=props
  const [formData, setFormData] = useState({
    productId: '',
    name: '',
    description: '',
    price: '',
    discount: '',
    categoryId: '',
    image: null
  });
  const handleChange = (e) => {//changes to the inputs
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {//changes to the file
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addProduct(formData);//API function
      alert("המוצר נוסף בהצלחה!");
      handleClose();// close dialog
    } catch (error) {
      alert("שגיאה בהעלאת מוצר");
    }
  };
  return (
    <div>
      <Dialog open={openDialog === 'addProduct'} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>הוספת מוצר חדש</DialogTitle>
        <form onSubmit={handleSubmit} >
        <DialogContent>
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <TextField name="productId" label="מזהה מוצר" required fullWidth onChange={handleChange} />
          <TextField name="name" label="שם מוצר" required fullWidth onChange={handleChange} />
          <TextField name="description" label="תיאור" required fullWidth multiline rows={3} onChange={handleChange} />
          <TextField name="price" label="מחיר" type="number" required fullWidth onChange={handleChange} />
          <TextField name="discount" label="הנחה" type="number" required fullWidth onChange={handleChange} />
          <TextField name="categoryId" label="קטגוריה" type="number" required fullWidth onChange={handleChange} />
          <input type="file" accept="image/*" onChange={handleFileChange} required style={stylesx} />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={stylesx} onClick={handleClose}>ביטול</Button>
          <Button sx={stylesx} variant="contained" type="submit" color="primary" >
              שלח
          </Button>
        </DialogActions>
         </form>
      </Dialog>
    </div>
  )
}
