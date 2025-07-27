import React,{useEffect,useState} from 'react'
import Item from '../ComponentsOther/Item';
import '../styles/produces.css';
import { useParams,useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getList } from '../API/CategoryController';
import { useDispatch } from "react-redux";
import {setCategories} from "../Store/slices/ctegories"


export default function Products(props) {

  const { idC } = props;
  const [categories, setCategorie] = useState([]);
  const reduxCategories = useSelector(state => state.categories.cate);
  const list = useLoaderData();
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true); 

 
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (reduxCategories.length === 0) {
          // If there are no categories in Redux, fetches from the server
          const result = await getList();
          dispatch(setCategories(result));
          setCategorie(result);
        } else {
          // If there are Bridgex categories, uses them
          setCategorie(reduxCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCategories();
  }, [reduxCategories, dispatch]); 
  if (loading) {
    return <div>טעינה...</div>;
  }
  const category = categories.find(ca => Number(ca.id) === idC);
  
  return (
    <>
    <div className='divImgForProducts'>
    <img className='imgStartPage' src={"/images/" + (category ? category.img : '')} alt="" />
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
