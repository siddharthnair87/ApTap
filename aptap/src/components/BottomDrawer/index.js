// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CompareDeals from "../CompareDeals";

export default function BottomDrawer({
  isOpen,
  setIsOpen,
  selectedDeals,
  removeDeal,
}) {
  console.log("selected deals", selectedDeals);

  return (
    <div style={{ background: "blue" }}>
      <Drawer
        anchor={"bottom"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {selectedDeals &&
          selectedDeals.map((dealCompare) => {
            return (
              <CompareDeals
                selectedDeals={dealCompare}
                removeDeal={removeDeal}
              />
            );
          })}
      </Drawer>
    </div>
  );
}
