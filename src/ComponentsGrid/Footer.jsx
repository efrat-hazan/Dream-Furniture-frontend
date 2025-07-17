import React from 'react'
import '../styles/footer.css'
import { NavLink } from 'react-router'
import { Grid } from '@mui/material';
import { Button, Tooltip } from '@mui/material'

export default function Footer() {
  const st={backgroundColor: 'var(--secondary-color)',
  color: 'var(--primary-color)',
  borderRadius: '8px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--secondary-color)',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease'}};
  return (
    <>
      <footer>
         <div className='gg' >
          <Grid container spacing={2}>
              <Grid 
                item container sx={6}
                direction="column"     // גריד אנכי
                spacing={2}           // מרווח בין האלמנטים
                alignItems="center"   // מירכוז אופקי
              >
                <Grid item>
                <NavLink className='navLink' to='/about' >אודות</NavLink><br />
                </Grid>
                <Grid item>
                <NavLink className='navLink' to='/policy' >מדיניות משלוחים</NavLink><br />
                </Grid>
                <Grid item>
                <NavLink className='navLink' to='/returnPolicy' > החזרות </NavLink><br />
                </Grid>
                <Grid item>
                <NavLink className='navLink' to='privacyPolicy' > תקנון פרטיות </NavLink><br />
                </Grid>
                <Grid item>
                    <div >
                      <a target='blank' href="https://www.youtube.com/" ><img className='imgA' src="src/images/global/youtube.svg" alt="" /></a>
                      <a target='blank' href="https://www.instagram.com/" ><img className='imgA' src="src/images/global/instagram.svg" alt="" /></a>
                      <a target='blank' href="https://www.facebook.co.il/" ><img className='imgA' src="src/images/global/facebook.svg" alt="" /></a>
                    </div>
                </Grid>
              </Grid>
          </Grid>
        </div>

        <div>
          <center>
            <h2 > יש לכם שאלה? </h2>
            <input className='inputFooter' type="text" placeholder=' שם פרטי' />
            <input className='inputFooter' type="email" placeholder='מייל' /> <br />
            <textarea className='textFooter' rows='9' placeholder='תוכן פניה' ></textarea><br />
           <Tooltip placement="top-start">
             <Button sx={st} className='inputs' id='btn'> בואו נדבר </Button>
          </Tooltip>          
          </center>
        </div>  
        <div>
        <hr />
        <p > efrat &copy;</p>
       
        </div>
      </footer>
    </>
  )
}
