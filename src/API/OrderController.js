import { checkTokenExpiry } from '../utils/tokenManager'

export const addOrder=async () => {
   // בדיקת תוקף הטוקן
   if (!checkTokenExpiry()) {
       throw new Error('הטוקן פג תוקף, אנא התחבר מחדש');
   }
   
   const token = localStorage.getItem('jwtToken');
   try{
      const response=await fetch(`https://dream-furniture-api-backend.onrender.com/orders/`, {
        method: 'POST',
         headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
      }     
      });
      const data =  response.status;
      return data;
   } 
   catch (error)
   {
      console.error('Error signing up:', error);
      throw error; 
   }

   
   }
      

export const getOrderById= async (body)=>{
   const token = localStorage.getItem('jwtToken');
   try{
      const response=await fetch(`https://dream-furniture-api-backend.onrender.com/orders/${body}`, {
      headers: { 
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }     
      });
      const data = await response.json();
      return data.order;
   } 
   catch (error)
   {
      console.error('Error signing up:', error);
      throw error; 
   }
}

export const getOrderByUserId= async ()=>{
   const token = localStorage.getItem('jwtToken');
   try{
      const response=await fetch(`https://dream-furniture-api-backend.onrender.com/orders/`, {
      headers: { 
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }     
      });
      const data = await response.json();
      return data.orders; 
   } 
   catch (error)
   {
      console.error('Error signing up:', error);
      throw error; 
   }
}

export const getAllOrders=async()=>{
    const token = localStorage.getItem('jwtToken');
     try{
      const response=await fetch(`https://dream-furniture-api-backend.onrender.com/orders/all`, {
      headers: { 
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }     
      });
      const data = await response.json();
      return data.orders; 
   } 
   catch (error)
   {
      console.error('Error signing up:', error);
      throw error; 
   }
}

export const updateOrderStatus=async(orderId)=>{
    const token = localStorage.getItem('jwtToken');
    try{
      const response=await fetch(`https://dream-furniture-api-backend.onrender.com/orders/${orderId}`, {
      method:"PUT",
      headers: { 
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      }     
      });
      const data = await response.json();
      const status=response.status;
      return{
         message:data.message,
         status:status
      }
   } 
   catch (error)
   {
      console.error('Error signing up:', error);
      throw error; 
   }

}