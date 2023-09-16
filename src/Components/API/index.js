import React, { useContext } from "react";
import { Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppData from "../Context";
import Button from "@mui/material/Button";
import apiStyling from "./apiStyling.module.css";
export const Api = () => {
  const { apiData } = useContext(AppData);
  const { FetchingData } = useContext(AppData);
  return (
    <div className={apiStyling.textCenter}>
      <Button
        variant="contained"
        className={apiStyling.button}
        sx={{ marginTop: "100px;" }}
        onClick={FetchingData}
      >
        Fetching Data
      </Button>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiData.map((item) => (
              <TableRow>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
