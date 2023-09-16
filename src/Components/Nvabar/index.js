import React from "react";
import navbarStyling from "./navbarStyling.module.css";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { MenuComp } from "../Menu";
import { DrawerComp } from "../Drawer";

export const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-aria-label="logo"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Stack direction="row" spacing={2}>
                  <Button color="inherit"></Button>
                  <Button color="inherit" className={navbarStyling.button}>
                    <NavLink to="/" className={navbarStyling.button}>
                      Home
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/about" className={navbarStyling.button}>
                      About
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/contact" className={navbarStyling.button}>
                      Contact
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/api" className={navbarStyling.button}>
                      Api
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/form" className={navbarStyling.button}>
                      Form
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/list" className={navbarStyling.button}>
                      List
                    </NavLink>
                  </Button>{" "}
                  {/* <Button color="inherit" className={navbarStyling.button}>
                    <MenuComp />
                  </Button> */}
                  <Button color="inherit">
                    <NavLink to="/carousel" className={navbarStyling.button}>
                      Carousel
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/todolist" className={navbarStyling.button}>
                      ToDoList
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/faq" className={navbarStyling.button}>
                      FAQ
                    </NavLink>
                  </Button>{" "}
                  <Button color="inherit">
                    <NavLink to="/bmi" className={navbarStyling.button}>
                      BMI Calculator
                    </NavLink>
                  </Button>{" "}
                </Stack>
              </>
            )}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
