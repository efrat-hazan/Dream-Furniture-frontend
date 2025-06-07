import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from '../ComponentsPage/Home'
import About from '../ComponentsPage/About'
import Products from '../ComponentsPage/Products'
import {LogIn,Log,Sing} from '../ComponentsPage/LogIn'
import ShoppingCart from '../ComponentsPage/ShoppingCart'
import PersonalProduction from '../ComponentsPage/PersonalProduction'
import chair from '../models/chair'
import table from '../models/table'
import sofa from '../models/sofa'
import armsofa from '../models/armsofa'
import Payment from '../ComponentsPage/Payment'
import PolicyPage from '../ComponentsPage/PolicyPage'
import PersonalCreation from '../ComponentsPage/PersonalCreation'

export default function Article() {

  // const router=createBrowserRouter([
  //    {
  //   path: '/',
  //   element: <Home />
  // },
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/policy',
  //   element: <PolicyPage />
  // },
  // {
  //   path: '/cart',
  //   element: <ShoppingCart />,
  //   loader:async()=>fetch()
  // },
  // {
  //   path: '/payment',
  //   element: <Payment />
  // },
  // {
  //   path: '/personalProduction/:category/:idd',
  //   element: <PersonalProduction />
  // },
  // {
  //   path: '/chair',
  //   element: <Products list={chair} id={0} />,
  //   loader:async()=>fetch("http://localhost:3000/products/0")
  // },
  // {
  //   path: '/armsofa',
  //   element: <Products list={armsofa} id={1} />,
  //       loader:async()=>fetch("http://localhost:3000/products/0")

  // },
  // {
  //   path: '/PersonalCreation',
  //   element: <PersonalCreation />,
  //   loader:async()=>fetch("http://localhost:3000/products/0")
  // },
  // {
  //   path: '/table',
  //   element: <Products list={table} id={3} />,
  //       loader:async()=>fetch("http://localhost:3000/products/3")
  // },
  // {
  //   path: '/sofa',
  //   element: <Products list={sofa} id={2} />,
  //       loader:async()=>fetch("http://localhost:3000/products/2")
  // },
  // {
  //   path: '/logIn',
  //   element: <LogIn />,
  //   children: [
  //     {
  //       path: 'log',
  //       element: <Log />
  //     },
  //     {
  //       path: 'sing',
  //       element: <Sing />
  //     }
  //   ]
  // }
  // ])

  return (
    <>
      

    {/* <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/about' element={<About></About>} ></Route>
            <Route path='/products' element={<Products></Products>} ></Route>
            <Route path="/policy" element={<PolicyPage />} />
            <Route path='/cart' element={<ShoppingCart></ShoppingCart>} ></Route>
            <Route path='/payment' element={<Payment></Payment>}></Route>
            <Route path="/personalProduction/:category/:idd" element={<PersonalProduction />}></Route>
            <Route path='/chair' element={<Products list={chair} id={0} ></Products>} ></Route>
            <Route path='/armsofa' element={<Products list={armsofa} id={1} ></Products>} ></Route>
           <Route path='/PersonalCreation' element={<PersonalCreation></PersonalCreation>}></Route>
            <Route path='/table' element={<Products list={table} id={3} ></Products>} ></Route>
            <Route path='/sofa' element={<Products list={sofa} id={2} ></Products>} ></Route>
            <Route path='/logIn' element={<LogIn></LogIn>}>
                 <Route path='log' element={<Log></Log>}></Route>
              <Route path='sing' element={<Sing></Sing>}></Route>
            </Route> 
    </Routes>
     */}
      {/* <RouterProvider router={router} />; */}
    </>
  )
}
