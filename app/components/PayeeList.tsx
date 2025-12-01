"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

export default function PayeeList() {
  const [payees, setPayees] = useState([]);

  useEffect(() => {
    fetch("/api/payees")
      .then((res) => res.json())
      .then((data) => setPayees(data));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Payee Name</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Bank Name</TableCell>
            <TableCell>IFSC / Swift</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {payees?.map((p:any, index:number) => (
            <TableRow key={p.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.accountNumber}</TableCell>
              <TableCell>{p.bankName}</TableCell>
              <TableCell>{p.ifsc}</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
