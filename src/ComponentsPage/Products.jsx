import React,{useEffect,useState} from 'react'
import Item from '../ComponentsOther/Item';
import '../styles/produces.css';
import { useParams,useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getList } from '../API/CategoryController';
import { useDispatch } from "react-redux";
import {setCategories} from "../Store/slices/ctegories"


export default function Products(props) {
//   const {idC}=props;
//    let categories= useSelector(state=>state.categories.cate);
//  async function  load () {
//       const c=await getList();
//       return c;
//   }
//    if(categories.length==0)
//     categories= load();
//   const list = useLoaderData(); // קבלת הנתונים מה-loader
//   console.log(categories);
//   console.log(idC);

  const { idC } = props;
  const [categories, setCategorie] = useState([]);
  const reduxCategories = useSelector(state => state.categories.cate);
  const list = useLoaderData();
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true); // מצב טעינה

 
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (reduxCategories.length === 0) {
          // אם אין קטגוריות ברידקס, מביא מהשרת
          const result = await getList();
          dispatch(setCategories(result));
          setCategorie(result);
        } else {
          // אם יש קטגוריות ברידקס, משתמש בהן
          setCategorie(reduxCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false); // סיים את מצב הטעינה
      }
    };

    fetchCategories();
  }, [reduxCategories, dispatch]); // התלותות
  if (loading) {
    return <div>טעינה...</div>; // תוכל להחזיר קומפוננטת טעינה כאן
  }


  console.log(categories)

  const category = categories.find(ca => Number(ca.id) === idC);
  console.log(category);
  
  return (
    <>
    <div className='divImgForProducts'>
    <img className='imgStartPage' src={"src/images/" + (category ? category.img : '')} alt="" />
   <span className='spanForProducts' > {category.name+" | קולקציה 2025"} </span>
    </div> <br /><br />
    <div className='allProducts'>
     {list.map((item, index) => (
        <Item key={index} obg={item} category={category} />
      ))}
    </div>
    </>
  )
}
