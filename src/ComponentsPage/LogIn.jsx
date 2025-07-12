import React,{useEffect, useState} from 'react'
import { Outlet,NavLink, Form, useNavigate} from 'react-router'
import '../styles/logIn.css'
import { TextField, Box, Button, Tooltip, Alert, Snackbar } from '@mui/material'
import { logIn, signUp } from '../API/UserController'
import { setUserName } from '../Store/slices/userName'
import { useDispatch } from 'react-redux'

const st={backgroundColor: 'var(--secondary-color)',//בשביל הכפתורים
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
               {/* אופציות התחברות או הרשמה */}
            <Ops></Ops><br /><br />
            </center>

            <center>
               {/* איזה קומפוננטה תוצג */}
            <Outlet></Outlet>
            </center>

    </>
  )
}
//קומפוננטת האופציות
export function Ops()
{
   const n= localStorage.getItem("user")
   const [ifUser, setIfUser]=useState(n?true:false)
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
//התחברות
export function Log()
{
   const [dataBody, setdata]=useState({name:"", password:""});
   const dispatch = useDispatch();
   const navigate=useNavigate();
  
    const handleChange = (e) => {//פונקציה בשביל הסטייט
        const { name, value } = e.target;
        setdata({ ...dataBody, [name]: value });
    };
   const handleSubmit = async (e) => {//פונקצית שליחה
      e.preventDefault(); 
      const data= await logIn(dataBody);//פוקנקצית API
      try{
         localStorage.setItem('jwtToken', data.token);//הכנסה של הטוקן
         console.log("token"+data.token);
         const userNa=dataBody.name;
         localStorage.setItem('user',userNa);
         
         dispatch(setUserName(userNa))//redux הכנסה ל 
         alert(data.message);
         navigate("/");
      }
      catch
      {
         error(data.message);
      }
     
    }
   return(
   <>
      <Form onSubmit={handleSubmit} >
         <Box  >
            <TextField  name='name' onChange={handleChange} label="שם משתמש" variant="outlined" color='black' /><br /> <br />
            <TextField  name="password" onChange={handleChange}  type="password" label="סיסמה " autoComplete="current-password" variant="outlined" color='black' /><br /> <br />
            <Tooltip title="sing up" placement="top-start">
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
      {/* <button className='inputs' id='btn'>sing up</button> */}
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
         localStorage.removeItem('user');
         localStorage.removeItem('jwtToken');
         dispatch(setUserName(""))
         setOpen(true);
         setTimeout(() => {
            setOpen(false);
            navigate("/");
         }, 2000); // 2 שניות ואז מעבר לדף הבית
      }
   };

   // הפעלת ההתנתקות ברגע שהקומפוננטה נטענת
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
