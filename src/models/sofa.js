let sofas = [
   {
       id: 1,
       name: "ספה תלת מושבית מילאנו",
       description: "ספת יוקרה מרופדת בבד קטיפה איכותי עם כריות נוי תואמות",
       price: 4999.99,
       discount: 15,
       image: "sofa/img1.jpg"
   },
   {
       id: 2,
       name: "ספה פינתית ונציה",
       description: "ספה פינתית מרווחת בעיצוב מודרני עם שזלונג מובנה",
       price: 6999.99,
       discount: 10,
       image: "sofa/img2.png"
   },
   {
       id: 3,
       name: "ספת סלון פירנצה",
       description: "ספה תלת מושבית מעוצבת בקווים נקיים עם ריפוד בד איכותי",
       price: 5499.99,
       discount: 20,
       image: "sofa/img3.png"
   },
   {
       id: 4,
       name: "מערכת ישיבה רומא",
       description: "סט ספות מעוצב הכולל ספה תלת מושבית וספה דו מושבית",
       price: 8999.99,
       discount: 12,
       image: "sofa/img4.png"
   },
   {
       id: 5,
       name: "ספה נפתחת טורינו",
       description: "ספה תלת מושבית נפתחת למיטה זוגית עם ארגז מצעים",
       price: 5999.99,
       discount: 15,
       image: "sofa/img5.jpg"
   },
   {
       id: 6,
       name: "ספת שזלונג פאלרמו",
       description: "ספה פינתית מפוארת עם שזלונג מתכוונן וכריות נוי",
       price: 7499.99,
       discount: 10,
       image: "sofa/img6.png"
   },
   {
       id: 7,
       name: "ספה מודולרית סיינה",
       description: "מערכת ישיבה מודולרית הניתנת להרכבה בהתאמה אישית",
       price: 9999.99,
       discount: 8,
       image: "sofa/img7.png"
   },
   {
       id: 8,
       name: "ספת צ'סטר ברגמו",
       description: "ספה קלאסית בסגנון צ'סטרפילד עם ריפוד עור איכותי",
       price: 11999.99,
       discount: 18,
       image: "sofa/img8.png"
   },
   {
       id: 9,
       name: "ספה פינתית נאפולי",
       description: "ספה פינתית גדולה עם שזלונג כפול ומשענות מתכווננות",
       price: 8499.99,
       discount: 15,
       image: "sofa/img9.png"
   },
   {
       id: 10,
       name: "ספת פרימיום ורונה",
       description: "ספת יוקרה בעיצוב חדשני עם ריפוד משולב בד וקטיפה",
       price: 13999.99,
       discount: 10,
       image: "sofa/img10.jpg"
   },
   {
       id: 11,
       name: "ספה מעוצבת קאפרי",
       description: "ספה תלת מושבית בעיצוב עכשווי עם כריות גב מתכווננות",
       price: 6499.99,
       discount: 12,
       image: "sofa/img11.jpg"
   }
];

// פונקציה לחישוב מחיר אחרי הנחה
export const calculateFinalPrice = (product) => {
   return product.price * (1 - product.discount / 100);
};

export default sofas;