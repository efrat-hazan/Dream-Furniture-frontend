import { useParams } from "react-router-dom"

    export const fetchItems = async (categoryId) => {
    const response = await fetch(`https://dream-furniture-api-backend.onrender.com/products/${categoryId}`);
    const data = await response.json();
    console.log('then', data);
    return data.products; // מחזירים את המוצרים
};

    export const getByItemId= async (id)=>{

      const response= await fetch(`https://dream-furniture-api-backend.onrender.com/products/product/${id}`)
      const data= await response.json();
      
      console.log('then getByItemId',data);
      return data.product;
    }

    export const addProduct =async (product) => {
        console.log("I'm hear");
        
        const formData = new FormData();
        formData.append("productId", product.productId);
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("discount", product.discount);
        formData.append("categoryId", product.categoryId);
        formData.append("image", product.image); 
        const token = localStorage.getItem('jwtToken');
        try{
        const response=await fetch('https://dream-furniture-api-backend.onrender.com/products/', {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`
            },
            body: formData,
        })
         const data = await response.json();
         console.log(data);
         
         return data;
         }
         catch(e){
             console.error('Error in addProduct:', error);
        throw error;
         }
};

