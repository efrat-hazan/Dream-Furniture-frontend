import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store'

import './index.css'
import App from './App.jsx'
// import ScrollToTop from './ComponentsOther/ScrollToTop.jsx'

// הוספת store ל-window כדי שנוכל לגשת אליו מ-tokenManager
window.store = store;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   
      <App />

    </Provider>
  </StrictMode>,
)
