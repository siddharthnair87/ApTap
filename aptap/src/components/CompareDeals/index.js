import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function CompareDeals({ selectedDeals, removeDeals }) {
  console.log("selec", selectedDeals);
  //   const Item = styled(Paper)(({ theme }) => ({
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));
  return (
    // <Stack direction="row" spacing={2}>
    //   <Item style={{ background: "red", justifyContent: "center", m: "auto" }}>
    //     {
    <div
      style={{
        // justifyContent: "center ",
        marginLeft: "20px",
        // border: "2px solid",
        width: "250px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <img
        src={selectedDeals.provider_logo_image_url}
        alt="logo"
        width="100px"
      />
      <div>
        <p style={{ marginLeft: "10px" }}>{selectedDeals.provider_name}</p>

        <p>{selectedDeals.deal_name}</p>
      </div>
    </div>
    //         }
    //       </Item>
    //     </Stack>
  );
}
