import { NavLink } from 'react-router-dom';
import '../styles/header.css'
import { useSelector } from 'react-redux';

export default function Header() {
  const categories= useSelector(state=>state.categories.cate);//getting the categories from redux
  return (
    <div>
      <header>
        {categories.map((category) => (
          <NavLink key={category.id} to={category.path} className="category-link">
            <img src={"/images/"+category.icon} alt="" className='iconsForHeader' />
            {category.name}
          </NavLink>  ))}
      </header>
    </div>
  )
}
