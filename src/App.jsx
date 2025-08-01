
import { RouterProvider,createBrowserRouter,} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserName } from './Store/slices/userName'
import { checkTokenExpiry } from './utils/tokenManager'
import Home from './ComponentsPage/Home'
import About from './ComponentsPage/About'
import Products from './ComponentsPage/Products'
import {LogIn,Log,Sing, Disengagement} from './ComponentsPage/LogIn'
import ShoppingCart from './ComponentsPage/ShoppingCart'
import PersonalProduction from './ComponentsPage/PersonalProduction'
import Payment from './ComponentsPage/Payment'
import PolicyPage from './ComponentsPage/PolicyPage'
import PersonalCreation from './ComponentsPage/PersonalCreation'
import Root from './ComponentsPage/Root'
import {fetchItems, getByItemId} from './API/ProductsController.js'
import { getList } from './API/CategoryController'
import { getCart } from './API/UserController.js'
import Orders from './ComponentsPage/Orders.jsx'
import SpecificOrder from './ComponentsPage/SpecificOrder.jsx'
import { getOrderById } from './API/OrderController.js'
import AdminDashboard from './ComponentsPage/ManagerPage.jsx'
import ReturnPolicy from './ComponentsPage/ReturnPolicy.jsx'
import PrivacyPolicy from './ComponentsPage/PrivacyPolicy.jsx'

function App() {
  const dispatch = useDispatch();
  
  // בדיקת תוקף הטוקן בכל טעינה של האפליקציה
  useEffect(() => {
    const isTokenValid = checkTokenExpiry();
    if (!isTokenValid) {
      // אם הטוקן פג תוקף, נקה גם את Redux
      dispatch(setUserName(''));
    }
  }, [dispatch]);

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
      path: 'personalProduction/:idd',
      element: <PersonalProduction />,
      loader:async({params})=>{
        const product=await getByItemId( params.idd);
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
        },
        {
          path:'Disengagement',
          element:<Disengagement />
        }
      ]
    },
    {
      path:'orders',
      element:<Orders />,
    }, 
    {
      path:'specificOrder/:orderId',
      element:<SpecificOrder />,
      loader: async ({ params }) => {
      const order = await getOrderById(params.orderId);
      return  order ;
      }
    },
    {
      path:'adminDashboard',
      element:<AdminDashboard />
    },
    {
      path:'returnPolicy',
      element:<ReturnPolicy/>
    } ,
    {
      path:'privacyPolicy',
      element:<PrivacyPolicy/>
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
