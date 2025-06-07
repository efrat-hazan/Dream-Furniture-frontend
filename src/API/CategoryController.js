// import categories from "../models/categories";



export const getList = async () => {

    let categories;
    try {
        const response = await fetch(`http://localhost:3000/categories/`);
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