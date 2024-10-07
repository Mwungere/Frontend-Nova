import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface ToastProps {
  open: boolean;
  handleClose: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
  message: string;
  severity: 'success' | 'error'; // You can also add 'info', 'warning' if needed
  autoHideDuration?: number; // Optional prop to customize the duration
}

export default function Toast({
  open,
  handleClose,
  message,
  severity,
  autoHideDuration = 5000, // Default to 5 seconds
}: ToastProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    >
      <Alert onClose={handleClose} variant='filled' severity={severity} sx={{ width: '100%' }}>
        <AlertTitle>{severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
