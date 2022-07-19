import React from "react";

import { useNavigate } from "react-router-dom";
import IsLoggedIn from "../IsLoggedIn";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@material-ui/core";
import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import AlertBox from "../Components/AlertBox";
// import AlertBox from '../Components/AlertBox'
import LogoutPopup from "../Components/LogoutPopup";
// import Context from '../Pages/Home'

import { useContext } from 'react';


const Navbar = ({title}) => {

    const navigate = useNavigate();
//     const value = useContext(Context);



     return (
          <div>

               <Box sx={{ flexGrow: 1 }} style={{ position: "fixed", top: "0", width: "100%", zIndex: "8" }}>
                    <AppBar position="static">
                         <Container>
                              <Toolbar>
                                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {title}
                                   </Typography>
                                   {/* {
                                   title != "Home" && <Button
                                        color="inherit"
                                        style={{ marginRight: "50px" }}
                                        onClick={() => navigate(`/signup/createuser`)}
                                   >
                                        Create User
                                   </Button>
                                   } */}

                                   <LogoutPopup />
                              </Toolbar>
                         </Container>
                    </AppBar>
               </Box>

          </div>
     );
};

export default Navbar;
