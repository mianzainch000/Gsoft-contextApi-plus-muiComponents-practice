import React, { useContext } from "react";
import homeStyling from "./homeStyling.module.css";
import AppData from "../Context";
import Button from "@mui/material/Button";

export const Home = () => {
  const { home, setHome } = useContext(AppData);

  return (
    <div className={homeStyling.textCenter}>
      <h1>{home}</h1>
      <Button
        variant="contained"
        onClick={() => setHome("Updata Data Using Context")}
        className={homeStyling.button}
      >
        Updata Data
      </Button>
    </div>
  );
};
