import React, { useContext } from "react";
import contactStyling from "./contactStyling.module.css";
import AppData from "../Context";

export const Contact = () => {
  const { contact } = useContext(AppData);

  return (
    <div className={contactStyling.textCenter}>
      <h1>{contact}</h1>
    </div>
  );
};
