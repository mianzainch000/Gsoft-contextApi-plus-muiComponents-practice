import React, { useContext } from "react";
import aboutStyling from "./aboutStyling.module.css";
import AppData from "../Context";
export const About = () => {
  const { about } = useContext(AppData);
  return (
    <div className={aboutStyling.textCenter}>
      <h1>{about}</h1>
    </div>
  );
};
