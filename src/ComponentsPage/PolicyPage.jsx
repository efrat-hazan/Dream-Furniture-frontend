import React from 'react';
import {Box,  Typography,  List,  ListItem,  Container,  Paper} from '@mui/material';

export default function PolicyPage() {
  const secondary = 'var(--secondary-color)';

  return (
    <Container maxWidth="md" sx={{ py: 4, direction: 'rtl', fontFamily: 'var(--primary-font)' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: secondary, fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        מדיניות החברה
      </Typography>

      <Typography
        align="center"
        sx={{ fontSize: '1.2rem', color: '#666', mb: 5 }}
      >
        לקוח יקר, אנו מברכים אותך על החלטתך לרכוש ריהוט חלום!
      </Typography>
      <Paper sx={sectionStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          1. זמן וצורת האספקה
        </Typography>
        <List disablePadding>
          <PolicyItem>זמן האספקה מהמחסן תוך שני ימי עסקים מעת ההזמנה</PolicyItem>
          <PolicyItem>זמן אספקה במשלוח הביתה הינו עד 14 ימי עסקים</PolicyItem>
          <PolicyItem>שולחנות בייצור אישי - זמן האספקה הינו 30 ימי עסקים</PolicyItem>
        </List>
      </Paper>
      <Paper sx={sectionStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          2. אחריות המוצר
        </Typography>
        <Box sx={{ lineHeight: 1.6 }}>
          <Typography>תקופת האחריות הינה ל-12 חודשים מתאריך מסירת המוצרים</Typography>
          <List disablePadding>
            <PolicyItem>האחריות תקפה בתנאי שימוש ביתי-פרטי סביר בלבד</PolicyItem>
            <PolicyItem>יש לבדוק את המוצרים עם קבלתם</PolicyItem>
          </List>
        </Box>
      </Paper>
      <Paper sx={sectionStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          3. טיפול ותחזוקה
        </Typography>
        <List disablePadding>
          <PolicyItem>יש להשתמש במטלית רכה בלבד</PolicyItem>
          <PolicyItem>אין להניח על המוצרים דברים חמים</PolicyItem>
          <PolicyItem>אין לחשוף את המוצרים לשמש ישירה</PolicyItem>
        </List>
      </Paper>
      <Paper sx={sectionStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          4. ביטול הזמנה
        </Typography>
        <Box sx={{ lineHeight: 1.6 }}>
          <Typography>ביטול ההזמנה אפשרי עד 14 ימים בלבד מקבלת המוצר</Typography>

          <Box sx={noteStyle}>
            <strong>* הערה חשובה:</strong>&nbsp;
            לא ניתן לבטל הזמנות מיוחדות או שולחנות בייצור אישי
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
const PolicyItem = ({ children }) => (
  <ListItem
    sx={{
      pr: 3, position: 'relative', fontFamily: 'var(--primay-font)',
      '&::before': {
        content: '"•"', position: 'absolute', right: 0, color: 'var(--secondary-color)', fontSize: '1.2rem', lineHeight: 1,
      },
    }}
  >
    {children}
  </ListItem>
);
const sectionStyle = {
  mb: 4, p: { xs: 2, md: 3 }, borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: '#fff',
};
const sectionTitleStyle = {
  color: 'var(--secondary-color)', mb: 2, borderBottom: '2px solid var(--primary-color)', pb: 1,
};
const noteStyle = {
  mt: 2,
  p: 2,
  borderRadius: 1,
  backgroundColor: '#fff3cd',
  borderRight: '4px solid #ffc107',
};
