
let chairs = [
    {
        id: 1,
        name: "כסא מעוצב ורונה",
        description: "כסא אוכל מרופד בבד קטיפה איכותי עם רגלי מתכת בגימור שחור מט",
        price: 499.99,
        discount: 15,
        image: "chairs/img1type1.png"
    },
    {
        id: 2,
        name: "כסא בר מילאנו",
        description: "כסא בר יוקרתי בריפוד דמוי עור עם משענת גב ארגונומית",
        price: 599.99,
        discount: 10,
        image: "chairs/img2type1.jpg"
    },
    {
        id: 3,
        name: "כסא פינת אוכל נאפולי",
        description: "כסא מעוצב בקווים נקיים עם ריפוד בד קטיפה ורגלי עץ מלא",
        price: 450.00,
        discount: 20,
        image: "chairs/img3type1.png"
    },
    {
        id: 4,
        name: "כסא מטבח טוסקנה",
        description: "כסא מודרני עם מושב מרופד ומשענת גב מעוצבת לישיבה נוחה",
        price: 399.99,
        discount: 0,
        image: "chairs/img4type1.jpg"
    },
    {
        id: 5,
        name: "כסא פינת אוכל פירנצה",
        description: "כסא אלגנטי בעיצוב איטלקי עם ריפוד בד משובח וגימור מושלם",
        price: 549.99,
        discount: 12,
        image: "chairs/img5type1.png"
    },
    {
        id: 6,
        name: "כסא אוכל רומא",
        description: "כסא יוקרתי עם ריפוד קטיפה ורגלי זהב בעיצוב קלאסי מודרני",
        price: 649.99,
        discount: 15,
        image: "chairs/img6type1.png"
    },
    {
        id: 7,
        name: "כסא בר ונציה",
        description: "כסא בר מעוצב עם משענת גבוהה ומושב מרופד לישיבה ממושכת",
        price: 579.99,
        discount: 10,
        image: "chairs/img7type1.jpg"
    },
    {
        id: 8,
        name: "כסא פינת אוכל סיינה",
        description: "כסא מודרני עם ריפוד איכותי ורגלי מתכת בצבע שחור מט",
        price: 489.99,
        discount: 18,
        image: "chairs/img8type1.png"
    }
];

// פונקציה לחישוב מחיר אחרי הנחה
export const calculateFinalPrice = (product) => {
    return product.price * (1 - product.discount / 100);
};

export default chairs;