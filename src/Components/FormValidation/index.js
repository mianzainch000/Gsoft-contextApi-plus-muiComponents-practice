import React, { useState } from "react";
import formValidation from "./formValidation.module.css";
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
export const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      PhoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, onSubmitprops) => {
      console.log("values", values);
      onSubmitprops.setSubmitting(false);
      formik.handleReset();
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is Required")
        .matches(/^[A-Za-z]+$/, "Only Alphabets are Allowed")
        .matches(/^[A-Z].*$/, "First Letter must be capital"),

      lastName: Yup.string()
        .required("Last Name is Required")
        .matches(/^[A-Za-z]+$/, "Only Alphabets are Allowed")
        .matches(/^[A-Z].*$/, "First Letter must be capital"),
      email: Yup.string()
        .required("Email is Required")
        .matches(/\S+@\S+\.\S+/, "Invalid Email"),
      PhoneNumber: Yup.string().required("PhoneNumber is Required"),

      password: Yup.string()
        .password()
        .minLowercase("2", "at least two lowerCase")
        .minUppercase("2", "at least two uppperCase")
        .minSymbols("2", "at least two Symbol")
        .required("Enter Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  return (
    <Box className={formValidation.container}>
      <Box
        className={formValidation.boxContainer}
        sx={{ margin: { lg: "0", md: "0", sm: "0", xs: "auto;" } }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container lg={12} spacing={2}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  name="firstName"
                  sx={{ width: "230px;" }}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>

              {formik.touched.firstName && formik.errors.firstName ? (
                <Box className={formValidation.error}>
                  {formik.errors.firstName}
                </Box>
              ) : (
                ""
              )}
            </Grid>

            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  name="lastName"
                  sx={{ width: "230px;" }}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>

              {formik.touched.lastName && formik.errors.lastName ? (
                <Box className={formValidation.error}>
                  {formik.errors.lastName}
                </Box>
              ) : (
                ""
              )}
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  autoComplete="off"
                  type="Email"
                  name="email"
                  sx={{ width: "230px;" }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>
              {formik.touched.email && formik.errors.email ? (
                <Box className={formValidation.error}>
                  {formik.errors.email}
                </Box>
              ) : (
                ""
              )}
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  id="outlined-basic"
                  label="PhoneNumber"
                  variant="outlined"
                  autoComplete="off"
                  type="number"
                  name="PhoneNumber"
                  sx={{ width: "230px;" }}
                  value={formik.values.PhoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                <Box className={formValidation.error}>
                  {formik.errors.PhoneNumber}
                </Box>
              ) : (
                ""
              )}
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  sx={{ width: "230px;" }}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>
              {formik.touched.password && formik.errors.password ? (
                <Box className={formValidation.error}>
                  {formik.errors.password}
                </Box>
              ) : (
                ""
              )}
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={formValidation.inputField}>
                <TextField
                  sx={{ width: "230px;" }}
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Box>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <Box className={formValidation.error}>
                  {formik.errors.confirmPassword}
                </Box>
              ) : (
                ""
              )}
            </Grid>
            <Grid lg={12} md={12} sm={12}>
              <Box className={formValidation.inputField}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={
                    !formik.isValid ||
                    formik.values.firstName.length == 0 ||
                    formik.isSubmitting
                  }
                  className={formValidation.button}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};
