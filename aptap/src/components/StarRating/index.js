import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//   },
// });
export default function BasicRating({ rating }) {
  const newRating = (rating * 10) / 2;

  return (
    // <ThemeProvider theme={theme}>
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        precision={0.5}
        value={newRating}
        readOnly
        style={{ color: "#2196f3" }}
      />
    </Box>
    // </ThemeProvider>
  );
}
