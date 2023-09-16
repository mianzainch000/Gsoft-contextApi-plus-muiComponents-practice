import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import style from "./style.module.css";
export const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  const calBMI = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      setMessage("Enter a valid weight");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are under weight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are a Normal Weight");
      } else {
        setMessage("You are over weight");
      }
    }
  };
  const handlerReset = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setMessage("");
  };
  return (
    <Box className={style.app}>
      <Box className={style.container}>
        <Typography variant="h4">BMI Calculator</Typography>
        <form onSubmit={calBMI}>
          <Box>
            <label>Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              //   required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Box>
          <Box>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter your height"
              //   required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Box>
          <Box>
            <button type="submit" className={style.btn}>
              Submit
            </button>
            <button type="submit" className={style.btn} onClick={handlerReset}>
              Reset
            </button>
          </Box>
          <Box className={style.center}>
            <Typography variant="h6">Your BMI is:{bmi}</Typography>
            <Typography className={style.p}>{message}</Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
