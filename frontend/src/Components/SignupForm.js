import React, { Fragment, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Edit, Lock, LockOpen, LockOpenOutlined } from "@mui/icons-material";

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Avatar } from "@mui/material";

const SignupForm = ({
  first_name,
  last_name,
  username,
  email,
  title,
  method,
  url,
  id,
  navigateTo,
}) => {
  const navigate = useNavigate();

  if (!id) {
    var validationSchema = Yup.object().shape({
      first_name: Yup.string()
        .required("First name is required")
        .matches(/^\S*$/, "This field should not be blank"),
      last_name: Yup.string()
        .required("Last name is required")
        .matches(/^\S*$/, "This field should not be blank"),
      username: Yup.string()
        .required("Username is required")
        .matches(/^\S*$/, "This field should not be blank"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid")
        .matches(/^\S*$/, "This field should not be blank"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must not exceed 20 characters")
        .matches(/^\S*$/, "This field should not be blank"),
      password2: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Confirm password does not match")
        .matches(/^\S*$/, "This field should not be blank"),
    });
  } else {
    var validationSchema = Yup.object().shape({
      first_name: Yup.string()
        .required("first_name is required")
        .matches(/^\S*$/, "This field should not be blank"),
      last_name: Yup.string()
        .required(" last_name is required")
        .matches(/^\S*$/, "This field should not be blank"),
      username: Yup.string()
        .required("username is required")
        .matches(/^\S*$/, "This field should not be blank"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid")
        .matches(/^\S*$/, "This field should not be blank"),
    });
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    if (navigateTo == "/admin_panel") {
      let temp = { id: id };
      let d = { ...data, ...temp };
    }

    axios({ method: method, url: url, data: data })
      .then((response) => {
        navigate(navigateTo);
      })
      .catch((error) => {
        if (error.response.data.username) {
          setError("username", {
            type: "server",
            message: error.response.data.username,
          });
        }
        if (error.response.data.email) {
          setError("email", {
            type: "server",
            message: error.response.data.email,
          });
        }
        if (error.response.data.password) {
          setError("password", {
            type: "server",
            message: error.response.data.password[0],
          });
        }
        if (error.response.data.password2) {
          setError("password2", {
            type: "server",
            message: error.response.data.password2[0],
          });
        }
      });
  };

  useEffect(() => {
    if (id) {
      axios({
        method: "get",
        url: `http://localhost:8000/admin_panel/${id}/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((response) => {
          setValue("first_name", response.data.first_name);
          setValue("last_name", response.data.last_name);
          setValue("username", response.data.username);
          setValue("email", response.data.email);
        })
        .catch((error) => {
          localStorage.removeItem("access_token");
        });
    }
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
      <div style={{ maxWidth: "600px" }}>
        <Paper elevation={8} >
          <Box px={3} py={2} m={4} >
            <Typography variant="h4" align="center" margin="dense">
              <Avatar
                style={{ marginLeft: "45%", backgroundColor: "#2790ca" }}
                sx={{ width: 40, height: 40 }}
              >
                {title === "Sign Up" ? <Lock fontSize="large" /> : <Edit />}
              </Avatar>
              {title}
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="first_name"
                  name="first_name"
                  label="First name"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  {...register("first_name")}
                  error={errors.first_name ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.first_name?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  value={last_name}
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  {...register("last_name")}
                  error={errors.last_name ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.last_name?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  value={username}
                  fullWidth
                  margin="dense"
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
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  value={email}
                  margin="dense"
                  variant="outlined"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.email?.message}
                </Typography>
              </Grid>

              {!id && (
                <>
                  {" "}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="password2"
                      name="password2"
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      margin="dense"
                      variant="outlined"
                      {...register("password2")}
                      error={errors.password2 ? true : false}
                    />
                    <Typography variant="inherit" color="error">
                      {errors.password2?.message}
                    </Typography>
                  </Grid>{" "}
                </>
              )}
            </Grid>
            <Box mt={3}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Box>
            <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
              {title === "Sign Up" && (
                <Button variant="contained" fullWidth>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login to Your Account
                  </Link>
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default SignupForm;
