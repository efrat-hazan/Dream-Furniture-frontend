import React, { useState } from 'react'
import PNav from '../ComponentsOther/PNav'
import '../styles/nav.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Nav() {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const userName=useSelector(state=>state.userName.name);
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
      <div><form onSubmit={handleSearch}> <input id='inputS' type="search" onChange={(e) => setSearchQuery(e.target.value)}
 name="s" placeholder=' מה לחפש? ' /></form>
        </div> {/* div ריק בצד ימין לאיזון */}
     <center> <NavLink to='/'><img className='imageLogo' src="src/images/global/logo2.png" alt="Logo" /></NavLink>
     </center>  
     <div className="nav-icons-container">
        <p>{userName==""?"לא מחובר":userName}</p>
        <NavLink to='/logIn'><img className="nav-icons" src="src/images/global/person.svg" alt="person" /></NavLink>
        <NavLink to='/cart'><img className="nav-icons" src="src/images/global/shopping_cart.svg" alt="cart" /></NavLink>       
      </div>
    </div>
    </nav>
    </>
  )
} 
