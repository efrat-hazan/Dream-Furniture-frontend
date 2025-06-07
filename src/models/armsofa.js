let armchairs = [
   {
       id: 1,
       name: "כורסת קטיפה מילאנו",
       description: "כורסת יחיד מעוצבת בריפוד קטיפה רך עם רגלי זהב",
       price: 1899.99,
       discount: 15,
       image: "armsofa/img1.png"
   },
   {
       id: 2,
       name: "כורסת טלוויזיה רקליינר",
       description: "כורסת טלוויזיה מפנקת עם מנגנון הטיה חשמלי",
       price: 2499.99,
       discount: 10,
       image: "armsofa/img2.jpg"
   },
   {
       id: 3,
       name: "כורסת מעצבים ונציה",
       description: "כורסה מודרנית בעיצוב ייחודי עם משענת גב גבוהה",
       price: 1999.99,
       discount: 20,
       image: "armsofa/img3.jpg"
   },
   {
       id: 4,
       name: "כורסת נדנדה פירנצה",
       description: "כורסת נדנדה מרופדת עם בסיס עץ מלא",
       price: 1699.99,
       discount: 12,
       image: "armsofa/img4.jpg"
   },
   {
       id: 5,
       name: "כורסה מעוצבת רומא",
       description: "כורסת יחיד בסגנון רטרו עם ריפוד בד איכותי",
       price: 1599.99,
       discount: 15,
       image: "armsofa/img5.jpg"
   },
   {
       id: 6,
       name: "כורסת פינוק נאפולי",
       description: "כורסה רחבה במיוחד עם כריות נוי תואמות",
       price: 2299.99,
       discount: 10,
       image: "armsofa/img6.png"
   },
   {
       id: 7,
       name: "כורסת וינטג' טוסקנה",
       description: "כורסה קלאסית בסגנון וינטג' עם ריפוד מיוחד",
       price: 2099.99,
       discount: 8,
       image: "armsofa/img7.png"
   },
   {
       id: 8,
       name: "כורסת הסבה סיינה",
       description: "כורסת מעצבים מודרנית עם בד איכותי דוחה כתמים",
       price: 1799.99,
       discount: 18,
       image: "armsofa/img8.png"
   }
];

// פונקציה לחישוב מחיר אחרי הנחה
export const calculateFinalPrice = (product) => {
   return product.price * (1 - product.discount / 100);
};

export default armchairs;