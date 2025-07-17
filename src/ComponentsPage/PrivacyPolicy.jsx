import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function PrivacyPolicy () {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          תקנון פרטיות
        </Typography>

        <Typography variant="body1" paragraph>
          אנו ב-<em>&nbsp;Dream furniture </em> מתייחסים בכבוד לפרטיותך. מדיניות פרטיות זו נועדה להבהיר כיצד אנו אוספים, משתמשים ושומרים מידע אישי שלך.
        </Typography>

        <Typography variant="h6" gutterBottom>
          איסוף מידע:
        </Typography>
        <ul style={{ paddingRight: '1.5rem', lineHeight: '1.8' }}>
          <li>בעת רכישה, ייתכן ונבקש ממך לספק פרטים כגון שם, טלפון, כתובת, ודוא"ל.</li>
          <li>האתר עשוי לאסוף נתוני שימוש אנונימיים (כגון עמודים נצפים, כתובת IP ועוד).</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          שימוש במידע:
        </Typography>
        <ul style={{ paddingRight: '1.5rem', lineHeight: '1.8' }}>
          <li>לצורכי אספקת מוצרים ושירותים ללקוח.</li>
          <li>לשיפור חוויית המשתמש באתר.</li>
          <li>לשליחת עדכונים ומבצעים (רק בהסכמתך).</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          שמירת המידע:
        </Typography>
        <Typography variant="body1" paragraph>
          אנו שומרים על המידע שלך בצורה מאובטחת, ולא נשתף אותו עם צדדים שלישיים ללא הסכמתך, למעט אם נדרש על פי חוק.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          אבטחת מידע:
        </Typography>
        <Typography variant="body1" paragraph>
          האתר מאובטח בטכנולוגיות מתקדמות להגנה על המידע, כולל הצפנת נתונים וגישה מוגבלת למורשים בלבד.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4, color: 'gray' }}>
          * החברה שומרת לעצמה את הזכות לעדכן את התקנון בהתאם לצורך וללא הודעה מוקדמת.
        </Typography>
      </Paper>
    </Box>
  );
};

