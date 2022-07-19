import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';



export default function AlertBox({ userId, userData, setUserData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const delUser = (id) => {
    axios
      .delete(`/admin_panel/${id}`)
      .then((response) => {
        let filteredUser = userData.filter((data) => data.id != id);
        setUserData(filteredUser);
      })
      .catch((error) => {});
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete user?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => delUser(userId)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
