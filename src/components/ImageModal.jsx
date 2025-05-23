import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ImageModal({ open, handleClose, imageUrl }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <img
          src={imageUrl}
          alt="Word visualization"
          style={{
            maxWidth: '100%',
            maxHeight: '70vh',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ImageModal;
