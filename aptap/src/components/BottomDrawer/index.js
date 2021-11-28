// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CompareDeals from "../CompareDeals";

export default function BottomDrawer({
  isOpen,
  setIsOpen,
  selectedDeals,
  removeDeal,
}) {
  return (
    <div>
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
              <div
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <CompareDeals
                  selectedDeals={dealCompare}
                  removeDeal={removeDeal}
                />
              </div>
            );
          })}
      </Drawer>
    </div>
  );
}
