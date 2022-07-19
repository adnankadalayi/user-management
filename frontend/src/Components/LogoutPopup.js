import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import IsLoggedIn from "../IsLoggedIn";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";
import { Avatar } from "@mui/material";
import { Logout } from "@mui/icons-material";

export default function LogoutPopup() {
  const { isActive, setIsActive } = useContext(MyContext);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Logout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Avatar sx={{backgroundColor:'red', marginLeft:'45%', marginTop:'10px'}}>
          <Logout />
        </Avatar>
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to logout ?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() =>
              IsLoggedIn.logout(() => {
                setIsActive(!isActive);
                navigate("/login");
              })
            }
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
