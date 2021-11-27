import React from "react";
import TableCell from "@mui/material/TableCell";
import StarRating from "../StarRating";
import "./style.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ReusableTableCell from "../ReusableTableCell";

export default function Item({ data, addDeal, removeDeal, selectedDeals }) {
  console.log("Item data", data);
  return (
    <>
      <TableCell component="th" scope="card">
        <img src={data.provider_logo_image_url} alt="logos" width="100px" />
      </TableCell>
      <TableCell>
        <div style={{ width: "300px" }}>
          <h1 style={{ textAlign: "left" }}>{data.provider_name}</h1>
          <p style={{ textAlign: "left" }}>{data.deal_name}</p>
          <StarRating rating={DataTransferItem.provider_rating} />
        </div>
      </TableCell>
      <TableCell align="right">
        <div style={{ color: "#1976d2" }}>
          <h1>£{data.monthly_price}</h1>
          <p style={{ color: "#1976d2" }}>Monthly Cost</p>
        </div>
      </TableCell>
      <TableCell align="right">
        <ReusableTableCell
          h1text={data.internet_speed + "Mbps"}
          ptext={data.broadband_type}
        />
      </TableCell>
      <TableCell align="right">
        <ReusableTableCell h1text={data.set_up_cost} ptext="Setup Costs" />
      </TableCell>
      <TableCell align="right">
        <ReusableTableCell h1text={data.contract_info} ptext="Contract" />
      </TableCell>
      {/* probably refactor into a single component */}

      <TableCell align="right">
        {!selectedDeals.includes(data) ? (
          <Button
            onClick={() => addDeal(data)}
            variant="outlined"
            style={{
              borderRadius: "40px",
              border: "3px solid",
              boxShadow: "0px 0px 10px #888888",
              height: "50px",
              fontWeight: "bold",
            }}
          >
            Add to Compare
          </Button>
        ) : (
          <Button
            onClick={() => removeDeal(data)}
            variant="outlined"
            style={{
              borderRadius: "40px",
              border: "3px solid",
              boxShadow: "0px 0px 10px #888888",
              height: "50px",
              fontWeight: "bold",
            }}
          >
            <p>Remove</p>
          </Button>
        )}
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
        <IconButton aria-label="expand card" size="small">
          {/* <KeyboardArcardUpIcon /> */}
        </IconButton>
      </TableCell>
    </>
  );
}
