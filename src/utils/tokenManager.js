// פונקציה לבדיקת תוקף הטוקן וניקוי localStorage
export const checkTokenExpiry = () => {
  const token = localStorage.getItem('jwtToken');
  const loginTime = localStorage.getItem('loginTime');
  
  if (!token || !loginTime) {
    return false; // אין טוקן או זמן התחברות
  }
  
  const currentTime = new Date().getTime();
  const tokenAge = currentTime - parseInt(loginTime);
  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 שעות במילישניות
  
  if (tokenAge > twentyFourHours) {
    // הטוקן פג תוקף - נקה הכל
    clearUserData();
    return false;
  }
  
  return true; // הטוקן עדיין תקף
};

// פונקציה לניקוי כל נתוני המשתמש
export const clearUserData = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('loginTime');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  localStorage.removeItem('user');
  
  // עדכון Redux - ניקוי שם המשתמש
  if (typeof window !== 'undefined' && window.store) {
    window.store.dispatch({ type: 'userName/setUserName', payload: '' });
  }
};

// פונקציה לשמירת טוקן עם זמן התחברות
export const saveToken = (token, role, userName) => {
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('loginTime', new Date().getTime().toString());
  localStorage.setItem('role', role);
  localStorage.setItem('userName', userName);
};