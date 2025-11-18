// import categories from "../models/categories";



export const getList = async () => {

    let categories;
        console.log('https://dream-furniture-api-backend.onrender.com/categories/');

    try {
        const response = await fetch(`https://dream-furniture-api-backend.onrender.com/categories/`);
        const data = await response.json();
        console.log('then', data);
        categories = data.cate;
        console.log(categories);
        return categories;        
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
    return categories;
};