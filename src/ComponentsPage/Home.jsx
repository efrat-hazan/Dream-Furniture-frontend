import React, {  useState } from 'react'
import { categoriesHome } from '../models/CategorierHome'
import "../styles/home.css"
export default function Home() {


  const [isHovered, setIsHovered] = useState([false,false,false,false]);
  
  return (
    <>
    <div>
      <img className='imgHome' src="src/images/global/home.jpg" alt="page-img-home" />
      <br /><br />
      
      <div className='container'>
      <div id='divSpan'>        
      <span id='spanHcolor1'> קטגוריות </span>
      <span id='spanHcolor2'> קטגוריות </span>
      </div>
      </div>
      <br /><br />
    <div className='image-container'>
    {categoriesHome.map((item, index)=>(
      <div 
      key={index}
      className="image-wrapper"
      onMouseEnter={() =>{let arr= [false,false,false,false];
        arr[index]=true;
        setIsHovered(arr)} }
      onMouseLeave={() => setIsHovered([false,false,false,false])}>
      
      <img 
        src={isHovered[index] ? item.img1 :item.img2} 
        alt="Hover Example"
        className="image" 
      />
      <p className='pForHome'>{item.name}</p>
    </div>
    ))}
</div>
    </div>
    
    </>
  )
}
