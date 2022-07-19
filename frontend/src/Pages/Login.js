import React, { Fragment, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import IsLoggedIn from "../IsLoggedIn";
import { green } from "@mui/material/colors";
import { MyContext } from "../App";

import MuiAlert from "@mui/material/Alert";
import { Avatar } from "@mui/material";
import { Lock } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const { isActive, setIsActive } = useContext(MyContext);

  // const handleClick = () => {
  //      setOpen(true);
  // };

  //snackbar start
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsActive(false);
    setOpen(false);
  };

  // setOpen(isActive)

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const snackBar = () => {};

  useEffect(() => {
    if (isActive) {
      setOpen(true);
      setTimeout(() => {
        setIsActive(false);
      }, 4000);
    }
  });

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  //snackbar end

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [wrongData, setWrongData] = useState(false);

  const onSubmit = (data) => {
    handleButtonClick();
    axios({ method: "post", url: "api/token/", data: data })
      .then((response) => {
        window.localStorage.setItem("access_token", response.data.access);
        IsLoggedIn.find((value) => navigate(value));
      })
      .catch((error) => {
        setWrongData(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    IsLoggedIn.find((value) => navigate(value));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "436px" }}>
        
        <Paper elevation={8} >
          <Box px={3} py={2} m={4}>
            <Box style={{ marginTop: "5px" }}>
              <Typography variant="h4" align="center" margin="dense">
                <Avatar style={{ marginLeft: "45%", backgroundColor: "#2790ca" }} sx={{ width: 40, height: 40 }}>

                <Lock fontSize="large" />  
                </Avatar>
                Sign In
              </Typography>

              {wrongData && (
                <Box border={2} borderColor="error.main" p={2} mt={3}>
                  Invalid Credentials
                </Box>
              )}

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="username"
                    name="username"
                    fullWidth
                    margin="dense"
                    label="Username"
                    variant="outlined"
                    {...register("username")}
                    error={errors.username ? true : false}
                  />
                  <Typography variant="inherit" color="error">
                    {errors.username?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    {...register("password")}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="error">
                    {errors.password?.message}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={buttonSx}
                  disabled={loading}
                  onClick={handleSubmit(onSubmit)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Button>
                {/* {loading && (
                                                       <CircularProgress
                                                            size={24}
                                                            sx={{
                                                                 color: green[500],
                                                                 position: "absolute",
                                                                 top: "50%",
                                                                 left: "50%",
                                                                 marginTop: "-12px",
                                                                 marginLeft: "-12px",
                                                            }}
                                                       />
                                                  )} */}
              </Box>

              <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" fullWidth>
                  <Link
                    to="/signup/0"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Create new account
                  </Link>
                </Button>
              </Box>
            </Box>
            {/* <Stack spacing={2} sx={{ width: "100%" }}>
                                        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                             <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                                                  Logout successfull
                                             </Alert>
                                        </Snackbar>
                                   </Stack> */}
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
