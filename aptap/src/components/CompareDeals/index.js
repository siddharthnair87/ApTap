import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function CompareDeals({ selectedDeal, removeDeal }) {
  // console.log("selec", selectedDeals);

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        width: "fit-Content",
        height: "fit-Content",
        margin: "30px",
        borderRadius: "10px",
        display: "flex",
        paddingLeft: "20px",
      }}
    >
      <img
        src={selectedDeal.provider_logo_image_url}
        alt="logo"
        width="70px"
        height="fit-Content"
      />
      <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <p
          style={{
            textAlign: "left",
          }}
        >
          {selectedDeal.provider_name}
        </p>

        <p>{selectedDeal.deal_name}</p>
      </div>
      <Button
        style={{ color: "grey", fontSize: "20px" }}
        onClick={() => {
          removeDeal(selectedDeal);
        }}
      >
        X
      </Button>
    </div>
  );
}
