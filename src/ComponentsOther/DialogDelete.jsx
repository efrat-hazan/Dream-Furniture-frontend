import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from '@mui/material';

export default function DialogDelete({ open, closeDialog, closeDialog1 }) {
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          מחיקת פריט מהסל
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Typography id="delete-dialog-description" sx={{ mt: 1 }}>
          האם אתה בטוח שברצונך למחוק את הפריט מהסל?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={closeDialog1}
          variant="contained"
          color="error"
        >
          אישור
        </Button>
        <Button
          onClick={closeDialog}
          variant="outlined"
          color="primary"
        >
          ביטול
        </Button>
      </DialogActions>
    </Dialog>
  );
}
