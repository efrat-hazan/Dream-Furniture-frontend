import { Grid } from '@mui/material'
import React,{useEffect} from 'react'
import '../styles/personalCre.css'
export default function PersonalCreation() {
   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
              }
          });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('.imgLeft, .imgRight').forEach((img) => {
          observer.observe(img);
      });
  
      return () => observer.disconnect();
  }, []);
  return (
    <div>
      <span id='titlePersonalCreation'> יצור אישי </span>
      {/* החלק הרשון  */}
      <Grid container spacing={2}>
         <Grid size={6}>
            <div className='spanForCreation'>
               <span >1. החלום שלכם, העיצוב שלנו <br />
                  נפגש לשיחת עיצוב אישית, נבין את החלום שלכם ונהפוך אותו לתכנית מדויקת. המעצבים שלנו יציעו רעיונות וטיפים מניסיונם העשיר, ויחד נגבש את הקונספט המושלם עבורכם.
               </span>
            </div>
         </Grid>
         <Grid size={6}>
           <center> <div className='imgRight'>
            <img className='img' src="/images/global/imgText2.jpg" alt="" />
            </div></center>
         </Grid>
      </Grid>
      {/* החלק השני */}
      <Grid container spacing={2}>
         <Grid size={6}>
            <center><div className='imgLeft'>
               <img  src="/images/global/imgText1.jpg" alt="" />
            </div></center>
         </Grid>
         <Grid size={6}>
            <div  className='spanForCreation'>
            <span>2. בחירת החומרים <br />
              זה הזמן לגעת, להרגיש ולבחור! נתאים יחד את סוג העץ, הגימור והפרזול שיהפכו את הרהיט שלכם לייחודי. כל פרט קטן נבחר בקפידה כדי ליצור את התוצאה המושלמת.</span>
            </div>
         </Grid>
      </Grid>
      {/* החלק השלישי */}
      <Grid container spacing={2}>
         <Grid size={6}>
            <div className='spanForCreation'>
               <span >3. מהדמיה למציאות <br />
                  נכין עבורכם הדמיה תלת-ממדית שתאפשר לכם לראות כיצד יראה הרהיט בביתכם. אחרי האישור הסופי, הנגרים המומחים שלנו יתחילו במלאכת היצירה (30-45 ימי עבודה).
               </span>
            </div>
         </Grid>
         <Grid size={6} >
            <center><div className='imgRight'>
               <img  src="/images/global/imgText3.jpg" alt="" />
            </div></center>
         </Grid>
      </Grid>
<br /><br />
      <span id='titlePersonalCreation'  > בואו שלחו לנו פניה כאן למטה ויחד נתחיל את החוויה משהו מיוחד שהוא רק שלכם </span>
  <br /><br />
   </div>
  )
}
