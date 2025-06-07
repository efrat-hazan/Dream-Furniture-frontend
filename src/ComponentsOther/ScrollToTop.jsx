import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const  pathname  = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // כשמשתמשים ב-createBrowserRouter, רוצים לגלול למעלה רק בניווט קדימה
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}