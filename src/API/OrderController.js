
export const addOrder=async (dataBody) => {
   
   const token = localStorage.getItem('jwtToken');
   try{
      const response=await fetch(`http://localhost:3000/orders/`, {
        method: 'POST',
         headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
      }     
      });
      const data = await response.json();
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
      const response=await fetch(`http://localhost:3000/orders/${body}`, {
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
      const response=await fetch(`http://localhost:3000/orders/`, {
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
      const response=await fetch(`http://localhost:3000/orders/`, {
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
      const response=await fetch(`http://localhost:3000/orders/${orderId}`, {
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