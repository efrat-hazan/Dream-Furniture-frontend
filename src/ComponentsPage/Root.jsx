import React,{useEffect} from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../ComponentsGrid/Nav'
import Header from '../ComponentsGrid/Header'
import Footer from '../ComponentsGrid/Footer'
import ScrollToTop from '../ComponentsOther/ScrollToTop';
import { useDispatch } from "react-redux";
import {setCategories} from "../Store/slices/ctegories"

export default function Root() {
  const dispatch = useDispatch();
  const { categories } = useLoaderData(); // מקבל את הנתונים מהלודר

  useEffect(() => {
    if (categories && categories.length > 0) {
      console.log('Categories from loader:', categories);
      dispatch(setCategories(categories));
    }
  }, [categories, dispatch]);

  return (
    <>
    <ScrollToTop></ScrollToTop>
      <div className='navbar'>
        <Nav></Nav>
        <Header></Header>
      </div>
      <article className='content'>
      <Outlet/>
      </article>
      
      <Footer></Footer>
    </>
  )
}

