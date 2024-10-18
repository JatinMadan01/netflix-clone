import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() { 
  const { open, id } = useSelector(store => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={handleClose} // Optional: Ensures dialog closes on clicking outside
        maxWidth="md" // Optional: Set dialog size (adjust as needed)
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          Movie Trailer
        </DialogTitle>
        <DialogContent>
          {/* Instead of DialogContentText, you can directly embed the video */}
          {id ? (
            <VideoBackground movieId={id} bool={true} />
          ) : (
            <p>Loading movie trailer...</p> // Fallback if id is undefined
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
