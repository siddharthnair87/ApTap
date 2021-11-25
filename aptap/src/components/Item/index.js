import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import StarRating from "../StarRating";
import "./style.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddToListButton from "../BottomDrawer";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TemporaryDrawer from "../BottomDrawer";

export default function Item({ data }) {
  const [list, setList] = useState([]);

  return (
    <TableContainer component={Paper} sx={{ m: "auto", width: "90%" }}>
      <Table
        aria-label="a dense table"
        size="small"
        sx={{ width: "99%", m: "10px" }}
      >
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              // change key to generate a random code
              key={row.provider_name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <img
                  src={row.provider_logo_image_url}
                  alt="logos"
                  width="100px"
                />
              </TableCell>
              <TableCell>
                <div>
                  <h1 style={{ textAlign: "left" }}>{row.provider_name}</h1>
                  <p style={{ textAlign: "left" }}>{row.deal_name}</p>
                  <StarRating rating={row.provider_rating} />
                </div>
              </TableCell>
              <TableCell align="right">
                <div style={{ color: "#1976d2" }}>
                  <h1>£{row.monthly_price}</h1>
                  <p style={{ color: "#1976d2" }}>Monthly Cost</p>
                </div>
              </TableCell>
              <TableCell align="right">
                {" "}
                <div style={{ fontWeight: "700" }}>
                  <h1>{row.internet_speed} Mbps</h1>
                  <p>Standard Speed</p>
                </div>
              </TableCell>
              {/* probably refactor into a single component */}
              <TableCell align="right">
                <div style={{ fontWeight: "700" }}>
                  <h1>£{row.set_up_cost}</h1>
                  <p>Setup Costs</p>
                </div>
              </TableCell>
              <TableCell align="right">
                <div style={{ fontWeight: "700" }}>
                  <h1>{row.contract_info} </h1>
                  <p>Contract</p>
                </div>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "40px",
                    border: "3px solid",
                    boxShadow: "0px 0px 10px #888888",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                >
                  <TemporaryDrawer data={data} />
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "40px",
                    width: "150px",
                    height: "50px",
                    fontWeight: "bold",
                  }}
                >
                  Continue
                </Button>
              </TableCell>
              <TableCell align="right">
                More Info{" "}
                <IconButton aria-label="expand row" size="small">
                  {/* <KeyboardArrowUpIcon /> */}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
