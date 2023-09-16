import React from "react";
import { Table, TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import list from "./list.module.css";

export const List = () => {
  const listData = [
    { id: "1", name: "Zain", age: "24" },
    { id: "2", name: "Usman", age: "34" },
    { id: "3", name: "Haasan", age: "24" },
    { id: "4", name: "Ali", age: "30" },
    { id: "5", name: "Umer", age: "18" },
    { id: "6", name: "Hamza", age: "26" },
    { id: "7", name: "Talal", age: "22" },
    { id: "8", name: "Mubeen", age: "24" },
  ];
  return (
    <>
      {listData.length == 0 ? (
        <h1 className={list.h1}>No item to display</h1>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Index</TableCell>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index}</TableCell>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
