import React from "react";
import TableCell from "@mui/material/TableCell";
import StarRating from "../StarRating";
import "./style.css";
import IconButton from "@mui/material/IconButton";
import ReusableTableCell from "../ReusableTableCell";
import CustomButton from "../CustomButton";

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
          <h1>£{data.monthly_price.toFixed(2)}</h1>
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
        <ReusableTableCell
          h1text={"£" + data.set_up_cost}
          ptext="Setup Costs"
        />
      </TableCell>
      <TableCell align="center">
        <ReusableTableCell h1text={data.contract_info} ptext="Contract" />
      </TableCell>
      {/* probably refactor into a single component */}

      <TableCell align="center">
        {!selectedDeals.includes(data) ? (
          <CustomButton
            text="Add to Compare"
            handleClick={addDeal}
            data={data}
          />
        ) : (
          <CustomButton text="Remove" handleClick={removeDeal} data={data} />
        )}
      </TableCell>
      <TableCell align="center">
        <CustomButton text="Continue" />
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
