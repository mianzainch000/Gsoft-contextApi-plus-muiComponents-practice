import { useState } from "react";
import drawerStyling from "./drawerStyling.module.css";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { MenuComp } from "../Menu";

export const DrawerComp = () => {
  const [isDraweOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </div>
      <Drawer
        anchor="left"
        open={isDraweOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon className="closeIcon" />
        </IconButton>

        <Box
          p={2}
          width="250px"
          textAlign="center"
          sx={{ backgroundColor: "yellowgreen;" }}
        >
          <Stack direction="row" spacing={2} className={drawerStyling.drawer}>
            <Button color="inherit" className={drawerStyling.button}>
              <NavLink
                to="/home"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/about"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                About
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/contact"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                Contact
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/api"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                Api
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/form"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                Form
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/list"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                List
              </NavLink>
            </Button>{" "}
            {/* <Button
              color="inherit"
              className={drawerStyling.button}
              onClick={() => setDrawerOpen(false)}
            >
              <MenuComp />
            </Button> */}
            <Button color="inherit">
              <NavLink
                to="/carousel"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                Carousel
              </NavLink>
            </Button>{" "}
            <Button color="inherit">
              <NavLink
                to="/bmi"
                className={drawerStyling.button}
                onClick={() => setDrawerOpen(false)}
              >
                BMI Calculator
              </NavLink>
            </Button>{" "}
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
};
