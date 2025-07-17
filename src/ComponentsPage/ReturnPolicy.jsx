import { Box, Typography, Paper } from '@mui/material';

export default function ReturnPolicy() {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          מדיניות החזרות
        </Typography>

        <Typography variant="body1" paragraph>
         &nbsp; אנו ב<em>&nbsp;Dream furniture </em> שואפים לספק לך את המוצרים האיכותיים ביותר ואת השירות הטוב ביותר.
          אם מכל סיבה אינך מרוצה מהמוצר שרכשת – תוכל להחזיר אותו בהתאם למדיניות הבאה:
        </Typography>

        <Typography variant="h6" gutterBottom>
          תנאי החזרה:
        </Typography>
        <ul style={{ paddingRight: '1.5rem', lineHeight: '1.8' }}>
          <li>החזרה תתאפשר תוך <strong>14 יום</strong> מיום קבלת המוצר.</li>
          <li>המוצר חייב להיות <strong>במצב חדש</strong>, באריזתו המקורית וללא שימוש.</li>
          <li>יש להציג חשבונית/הוכחת רכישה.</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          מוצרים שלא ניתן להחזיר:
        </Typography>
        <ul style={{ paddingRight: '1.5rem', lineHeight: '1.8' }}>
          <li>רהיטים בהתאמה אישית.</li>
          <li>מוצרים שנעשה בהם שימוש.</li>
          <li>מוצרים עם נזק שנגרם על ידי הלקוח.</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          החזר כספי:
        </Typography>
        <Typography variant="body1" paragraph>
          לאחר קבלת המוצר ובדיקתו – יבוצע החזר כספי תוך <strong>7 ימי עסקים</strong> לאמצעי התשלום המקורי.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4, color: 'gray' }}>
          * החברה שומרת לעצמה את הזכות לשנות את המדיניות ללא הודעה מוקדמת.
        </Typography>
      </Paper>
    </Box>
  );
};

