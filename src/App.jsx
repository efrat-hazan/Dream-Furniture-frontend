import './App.css'
import { RouterProvider,createBrowserRouter,} from 'react-router-dom'
import Home from './ComponentsPage/Home'
import About from './ComponentsPage/About'
import Products from './ComponentsPage/Products'
import {LogIn,Log,Sing} from './ComponentsPage/LogIn'
import ShoppingCart from './ComponentsPage/ShoppingCart'
import PersonalProduction from './ComponentsPage/PersonalProduction'
import Payment from './ComponentsPage/Payment'
import PolicyPage from './ComponentsPage/PolicyPage'
import PersonalCreation from './ComponentsPage/PersonalCreation'
import Root from './ComponentsPage/Root'
import {fetchItems, getByItemId} from './API/ProductsController.js'
import { getList } from './API/CategoryController'
import { getCart } from './API/UserController.js'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      loader: async () => {
        // טוען את הקטגוריות לפני שהראוט נטען
        const categories = await getList();
        return { categories };
      },
      children:[
 {
      index:true,
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'policy',
      element: <PolicyPage />
    },
    {
      path: 'cart',
      element: <ShoppingCart />,
      loader: async()=>{
        const cart=await getCart();
        return cart;
      }
    },
    {
      path: 'payment',
      element: <Payment />
    },
    {
      path: 'personalProduction/:category/:idd',
      element: <PersonalProduction />,
      loader:async({params})=>{
        const product=await getByItemId(params.category, params.idd);
        return product;
      }
    },
    {
      path: 'chair',
      element: <Products idC={1} />,
       loader: async () => {
        const products = await fetchItems(1); // מחכים לתוצאה
        return products; // מחזירים את המוצרים
    }
    },
    {
      path: 'armsofa',
      element: <Products idC={2} />,
      loader: async () => {
        const products = await fetchItems(2); // מחכים לתוצאה
        return products; // מחזירים את המוצרים
    }
  
    },
    {
      path: 'sofa',
      element: <Products  idC={3} />,
           loader: async () => {
        const products = await fetchItems(3); // מחכים לתוצאה
        return products; // מחזירים את המוצרים
    }
    },
     {
      path: 'table',
      element: <Products idC={4} />,
        loader: async () => {
        const products = await fetchItems(4); // מחכים לתוצאה
        return products; // מחזירים את המוצרים
    }
    },
    {
      path: 'PersonalCreation',
      element: <PersonalCreation />,
    },
   {
      path: 'logIn',
      element: <LogIn />,
      children: [
        {
          path: 'log',
          element: <Log />
        },
        {
          path: 'sing',
          element: <Sing />
        }
      ]
    }
  ]
    }      
    ])
   
  return (
    <>
    
      <RouterProvider router={router} />;
    </>
  )
}

export default App
