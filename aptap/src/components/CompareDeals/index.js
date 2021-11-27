import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function CompareDeals({ selectedDeals, removeDeals }) {
  console.log("selec", selectedDeals);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Stack direction="row" spacing={2}>
      <Item style={{ background: "red", justifyContent: "center", m: "auto" }}>
        {
          <div>
            <img
              src={selectedDeals.provider_logo_image_url}
              alt="logo"
              width="50px"
            />
            <h1>{selectedDeals.provider_name}</h1>
            <p>{selectedDeals.deal_name}</p>
          </div>
        }
      </Item>
    </Stack>
  );
}
