import React,{useEffect, useState} from 'react'
import { Outlet,NavLink, Form, useNavigate} from 'react-router'
import '../styles/logIn.css'
import { TextField, Box, Button, Tooltip, Alert, Snackbar } from '@mui/material'
import { logIn, signUp } from '../API/UserController'
import { setUserName } from '../Store/slices/userName'
import { useDispatch, useSelector } from 'react-redux'
import { saveToken, clearUserData } from '../utils/tokenManager'

const st={backgroundColor: 'var(--secondary-color)',//For the buttons
  color: 'var(--primary-color)',
  borderRadius: '8px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-color)',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease'}};
export  function LogIn() {
   
  return (
    <>
            <center>
              {/* Login or registration options */}
            <Ops></Ops><br /><br />
            </center>

            <center>
               {/* Which component will be displayed*/}
            <Outlet></Outlet>
            </center>

    </>
  )
}
//Options component
export function Ops()
{
   const userName = useSelector(state => state.userName.name); // שימוש ב-Redux
   const token = localStorage.getItem('jwtToken');
   
   // בדיקה אם המשתמש מחובר לפי Redux וטוקן
   const ifUser = userName && userName !== "" && token;
   return(
      <>
          {ifUser ? (
            <>
            <NavLink className='linkOps' to='disengagement'>התנתקות</NavLink>
            <NavLink className="linkOps" to='/orders'>הזמנות</NavLink>
         </>
         ) : (
            <>
               <NavLink className='linkOps' to='log'>התחברות</NavLink>
               <NavLink className='linkOps' to='sing'>הרשמה</NavLink>
            </>
         )}
      </>
   )
   
}
export function Log()
{
   const [dataBody, setdata]=useState({name:"", password:""});
   const dispatch = useDispatch();
   const navigate=useNavigate();
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({ ...dataBody, [name]: value });
    };
   const handleSubmit = async (e) => {
      e.preventDefault(); 
      try{
         const data= await logIn(dataBody);
         // שמירת טוקן עם זמן התחברות
         saveToken(data.token, data.user.role, dataBody.name);
         localStorage.setItem('user', dataBody.name);
         
         dispatch(setUserName(dataBody.name))//redux הכנסה ל 
         alert(data.message);
         navigate("/");
      }
      catch(error)
      {
         console.error('Login error:', error);
         alert('שגיאה בהתחברות');
      }
     
    }
   return(
   <>
      <Form onSubmit={handleSubmit} >
         <Box  >
            <TextField  name='name' onChange={handleChange} label="שם משתמש" variant="outlined" color='black' /><br /> <br />
            <TextField  name="password" onChange={handleChange}  type="password" label="סיסמה " autoComplete="current-password" variant="outlined" color='black' /><br /> <br />
            <Tooltip title="log in" placement="top-start">
            <Button sx={st} type='submit' className='inputs' id='btn'>  log in</Button>
            </Tooltip>
         </Box>
      </Form>
   </>
   )
}

//הרשמה
export function Sing()
{
   const[dataBody, setdata]=useState({name:'',password:'',email:''})
   const [text, setText]= useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({ ...dataBody, [name]: value });
    };
    const handleSubmit = async (e) => {
         e.preventDefault();
         console.log('Email:', dataBody.email);
         console.log('Name:', dataBody.name);
         console.log('Password:', dataBody.password);

        try{
         const data=await  signUp(dataBody); 
        setText(data.message)
         setdata({name:'',password:'',email:''});
        }
        catch(e)
        {
         console.error(e.message)
        }
    }
    
   return (
      <>
      <Form onSubmit={handleSubmit}>
      <Box >
         <TextField  name='name' onChange={handleChange} value={dataBody.name} label="שם משתמש" variant="outlined" color='black' /><br /> <br />
         <TextField  name='password' onChange={handleChange} value={dataBody.password} type='password' label="סיסמה " autoComplete="new-password"  variant="outlined" color='black' /><br /> <br />
         <TextField  name='email' onChange={handleChange} value={dataBody.email} type='email' label="email " variant="outlined" color='black' /><br /> <br />
      </Box>       
      <Tooltip  title="sing up" placement="top-start">
           <Button sx={st} type='submit' className='inputs' id='btn'>  sing up</Button>
          </Tooltip>
          <p> {text} </p>
      </Form>
      </>
   )
}

export function Disengagement()
{
  const [open, setOpen] = useState(false);
   const navigate = useNavigate();
   const dispatch=useDispatch();
   const handleLogout = () => {
      const ans = confirm("תרצה לנתק את חשבונך מהאתר?");
      if (ans) {
         clearUserData();
         localStorage.removeItem('user');
         dispatch(setUserName(""))
         setOpen(true);
         setTimeout(() => {
            setOpen(false);
            navigate("/");
         }, 2000); 
      }
   };

   useEffect(() => {
      handleLogout();
      // eslint-disable-next-line
   }, []);

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setOpen(false);
      navigate("/");
   };

   return (
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            נותקת מהמערכת בהצלחה!
         </Alert>
      </Snackbar>
   );
}
