import { useParams } from "react-router-dom"

    export const fetchItems = async (categoryId) => {
    const response = await fetch(`http://localhost:3000/products/${categoryId}`);
    const data = await response.json();
    console.log('then', data);
    return data.products; // מחזירים את המוצרים
};

    export const getByItemId= async (id)=>{

      const response= await fetch(`http://localhost:3000/products/product/${id}`)
      const data= await response.json();
      
      console.log('then getByItemId',data);
      return data.product;
    }

    export const addProduct = (product) => {
    fetch('http://localhost:3000/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

