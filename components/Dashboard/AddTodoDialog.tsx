import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=' w-full'>
      <Button color='success' variant="outlined"  onClick={handleClickOpen} className=' font-body'>
        Add Todo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        fullWidth
      >
        <DialogTitle className=' flex w-full justify-center items-center font-body'>New Note</DialogTitle>
        <DialogContent>
          <input type='text' placeholder='Input your note...' className=' w-full border border-[#1D6923] outline-none p-3 rounded-lg' />
          
        </DialogContent>
        <DialogActions>
          <div className=' w-full flex justify-between items-center px-4 mt-28 mb'>
            <Button color='success' variant='outlined' onClick={handleClose}>Cancel</Button>
            <Button color='success' variant='contained' type='submit'>Apply</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}