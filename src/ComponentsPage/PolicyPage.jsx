import React from 'react';
import '../styles/policy.css';

export default function PolicyPage() {
  return (
    <div className="policy-container">
      <h1 className="policy-main-title">מדיניות החברה</h1>
      <p className="policy-welcome">
        לקוח יקר, אנו מברכים אותך על החלטתך לרכוש ריהוט חלום!
      </p>

      <section className="policy-section">
        <h2>1. זמן וצורת האספקה</h2>
        <ul className="policy-list">
          <li>זמן האספקה מהמחסן תוך שני ימי עסקים מעת ההזמנה</li>
          <li>זמן אספקה במשלוח הביתה הינו עד 14 ימי עסקים</li>
          <li>שולחנות בייצור אישי - זמן האספקה הינו 30 ימי עסקים</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>2. אחריות המוצר</h2>
        <div className="policy-content">
          <p>תקופת האחריות הינה ל-12 חודשים מתאריך מסירת המוצרים</p>
          <ul className="policy-list">
            <li>האחריות תקפה בתנאי שימוש ביתי-פרטי סביר בלבד</li>
            <li>יש לבדוק את המוצרים עם קבלתם</li>
          </ul>
        </div>
      </section>

      <section className="policy-section">
        <h2>3. טיפול ותחזוקה</h2>
        <ul className="policy-list">
          <li>יש להשתמש במטלית רכה בלבד</li>
          <li>אין להניח על המוצרים דברים חמים</li>
          <li>אין לחשוף את המוצרים לשמש ישירה</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>4. ביטול הזמנה</h2>
        <div className="policy-content">
          <p>ביטול ההזמנה אפשרי עד 14 ימים בלבד מקבלת המוצר</p>
          <div className="policy-note">
            <strong>* הערה חשובה: </strong>
            לא ניתן לבטל הזמנות מיוחדות או שולחנות בייצור אישי
          </div>
        </div>
      </section>
    </div>
  );
}