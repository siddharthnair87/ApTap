import axios from "./axios";
import { useEffect, useState } from "react";
import Item from "../Item";
import BottomDrawer from "../BottomDrawer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

export default function Container() {
  const [selectedDeals, setSelectedDeals] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log("data", data);
  useEffect(() => {
    async function getData() {
      const request = await axios.get();
      return setData(request.data.deals);
    }
    getData();
  }, []);

  const toggleDrawer = (event) => {
    setIsOpen(true);
  };

  const addDeal = (data) => {
    setSelectedDeals([...selectedDeals, data]);
    toggleDrawer();
  };
  const removeDeal = (data) => {
    setSelectedDeals(selectedDeals.filter((deal) => deal !== data));
    toggleDrawer();
  };
  console.log("container", selectedDeals);
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          m: "auto",
          width: "90%",
          borderRadius: "25px",
          justifyContent: "center",
        }}
      >
        <Table
          aria-label="a dense table"
          size="small"
          sx={{ width: "99%", m: "10px" }}
        >
          <TableBody>
            {data &&
              data.map((rows) => {
                return (
                  <TableRow
                    key={rows.deal_id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <Item
                      data={rows}
                      addDeal={addDeal}
                      removeDeal={removeDeal}
                      selectedDeals={selectedDeals}
                    />
                  </TableRow>
                );
              })}{" "}
          </TableBody>
        </Table>
      </TableContainer>
      <BottomDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDeals={selectedDeals}
        removeDeal={removeDeal}
      />
    </div>
  );
}
