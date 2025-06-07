let tables = [
   {
       id: 1,
       name: "שולחן אוכל ונציה",
       description: "שולחן אוכל מודרני עם רגלי מתכת שחורות ופלטה בגימור עץ טבעי",
       price: 2999.99,
       discount: 15,
       image: "table/img1.png"
   },
   {
       id: 2,
       name: "שולחן סלון מילאנו",
       description: "שולחן סלון עגול עם רגלי זהב ומשטח שיש יוקרתי",
       price: 1899.99,
       discount: 10,
       image: "table/img2.jpg"
   },
   {
       id: 3,
       name: "שולחן קפה פירנצה",
       description: "שולחן קפה מעוצב עם משטח זכוכית ובסיס מתכת מוזהב",
       price: 1499.99,
       discount: 20,
       image: "table/img3.jpg"
   },
   {
       id: 4,
       name: "שולחן אוכל טוסקנה",
       description: "שולחן אוכל מלבני מעץ מלא עם רגלי מתכת מעוצבות",
       price: 3499.99,
       discount: 12,
       image: "table/img4.jpg"
   },
   {
       id: 5,
       name: "שולחן צד רומא",
       description: "שולחן צד מודרני עם משטח זכוכית ורגלי מתכת מוצלבות",
       price: 899.99,
       discount: 15,
       image: "table/img5.png"
   },
   {
       id: 6,
       name: "שולחן קפה נאפולי",
       description: "סט שולחנות קפה מדורגים בעיצוב גיאומטרי עם משטחי עץ",
       price: 1699.99,
       discount: 10,
       image: "table/img6.png"
   },
   {
       id: 7,
       name: "שולחן אוכל סיינה",
       description: "שולחן אוכל יוקרתי עם פלטת שיש ורגלי מתכת מוזהבות",
       price: 4999.99,
       discount: 8,
       image: "table/img7.jpg"
   },
   {
       id: 8,
       name: "שולחן סלון פאלרמו",
       description: "שולחן סלון מרובע עם משטח זכוכית ומסגרת מתכת שחורה",
       price: 2199.99,
       discount: 18,
       image: "table/img8.png"
   },
   {
       id: 9,
       name: "שולחן קונסולה ברגמו",
       description: "שולחן קונסולה צר עם מדף תחתון ורגלי מתכת מעוצבות",
       price: 1299.99,
       discount: 15,
       image: "table/img9.jpg"
   }
];

// פונקציה לחישוב מחיר אחרי הנחה
export const calculateFinalPrice = (product) => {
   return product.price * (1 - product.discount / 100);
};

export default tables;