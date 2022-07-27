import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import http from "../Config/AxiosConfig";
import swal from "sweetalert2";

import {
  TableContainer,
  TableHead,
  TableCell,
  Button,
  ButtonGroup,
  TablePagination,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody/TableBody";
import "../CSS/style.css";
import Helper from "../Helper";

function Tables() {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //handle delete
  const HandleDelete = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          http
            .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then((res) => {
              if (res.status === 200) {
                setRefresh(!refresh);
              }
            })
            .catch((err) => {
              swal.fire("delete", "Something went wrong", "error");
            });
        }
      });
  };

  const base_api_url = () => {
    fetch(`${Helper.Environment.BASE_API_URL_USERS}comments`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    setUsers(base_api_url);
  }, []);

  return (
    <>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} arial-label="simple table">
          <TableHead>
            <TableRow className="tablerow">
              <TableCell>Posted</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">Email&nbsp;(g)</TableCell>
              <TableCell align="left">Body&nbsp;(g)</TableCell>
              <TableCell align="left">Actions&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.body}</TableCell>

                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Add</Button>
                    <Button onClick={() => HandleDelete(row.id)}>Delete</Button>
                    <Button>Update</Button>
                  </ButtonGroup>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users ? users.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}

export default Tables;
