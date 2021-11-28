import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function CompareDeals({ selectedDeals, removeDeals }) {
  // console.log("selec", selectedDeals);

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        width: "300px",
        height: "80px",
        margin: "20px",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <img
        src={selectedDeals.provider_logo_image_url}
        alt="logo"
        width="100px"
      />
      <div>
        <p style={{ textAlign: "left" }}>{selectedDeals.provider_name}</p>

        <p>{selectedDeals.deal_name}</p>
      </div>
    </div>
  );
}
