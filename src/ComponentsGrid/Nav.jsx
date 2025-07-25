import React, { useState } from 'react'
import PNav from '../ComponentsOther/PNav'
import '../styles/nav.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState('');//for search
  const [role,setrole]=useState(''); //for role if is manager
  const ro=localStorage.getItem('role');

  if(ro==='maneger'){
    setrole('maneger');
  }   
  const navigate = useNavigate();
  const userName=useSelector(state=>state.userName.name);//Getting the name from redux
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };
  return (
    <>
      <nav>
        <PNav></PNav>
        <div className='navCo'>
          <div>
            <form onSubmit={handleSearch}> 
              <TextField id="standard-search" label="מה לחפש?"
              type="search" variant="standard" onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
          </div> 
          <center> <NavLink to='/'><img className='imageLogo' src="/images/global/logo2.png" alt="Logo" /></NavLink></center>  
        
          <div className="nav-icons-container"> {/*link to manager and name for user*/}         
            {ro=='manager'&&<NavLink to='/adminDashboard' >DASHBOARD</NavLink>}
            <p>{userName==""?"לא מחובר":userName}</p>
            <NavLink to='/logIn'><img className="nav-icons" src="/images/global/person.svg" alt="person" /></NavLink>
            <NavLink to='/cart'><img className="nav-icons" src="/images/global/shopping_cart.svg" alt="cart" /></NavLink>       
          </div>
        </div>
      </nav>
    </>
  )
} 
