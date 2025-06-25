export const logIn = async (dataBody) => {
    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBody),
        });

        const data = await response.json();//הוצאה של הנתונים
        return data; // מחזיר את הנתונים אם יש צורך
    }
    catch (error) {
        console.error('Error logging in:', error);
        throw error; 
    }
};
export const signUp = async (dataBody) => {
    try {
        const response = await fetch(`http://localhost:3000/users/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBody),
        });

        const data = await response.json();
        return data; // מחזיר את הנתונים אם יש צורך
    } catch (error) {
        console.error('Error signing up:', error);
        throw error; 
    }
};

export const saveCart = async (dataBody) => {
    const token = localStorage.getItem('jwtToken');
    console.log('Sending to server:', {
        token: token ? 'exists' : 'missing',
        data: dataBody
    });
    try {const response = await fetch(`http://localhost:3000/users/cart/add`, {
            method: "POST",
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody),
        });       
        const data = await response.json();
        console.log('Server Response:', {
            status: response.status,
            data: data
        });
        
        return {
            data: data,
            status: response.status
        };
    }
    catch (error) {
        console.error('Error in productCart:', error);
        throw error;
    }
}
export const getCart=async()=>{
    const token=localStorage.getItem('jwtToken');

    const response=await fetch(`http://localhost:3000/users/cart`,{
        headers:{'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' }
    })
    const data=await response.json();
   
    
    console.log("getCart",data);
    return {
        cartItems:data.cart,
        total:data.total
    }
}

export const removeFromCart=async(id)=>{
    const token=localStorage.getItem('jwtToken');

    const response= await fetch(`http://localhost:3000/users/${id}`,{
    method:"DELETE",
    headers:{'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' }
    })
    const data=await response.json();
    console.log("data",data);
    
    return{
        cartItems: data.cart,
        status:data.status,
        message:data.message
    }

}

export const decreaseCartItemQuantity= async(dataBody)=>{
    const token=localStorage.getItem('jwtToken');
    const response=await fetch(`http://localhost:3000/users/`,{
    method:"DELETE",
    headers:{'Authorization': `Bearer ${token}`,'Content-Type': 'application/json' },
    body: JSON.stringify(dataBody),
    })
    return{
        cartItems: data.cart,
        status:data.status,
        message:data.message
    }
}