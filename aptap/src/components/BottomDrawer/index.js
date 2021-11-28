// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CompareDeals from "../CompareDeals";
import CustomButton from "../CustomButton";

export default function BottomDrawer({
  isOpen,
  setIsOpen,
  selectedDeals,
  removeDeal,
}) {
  const handleClick = () => {};

  return (
    <div>
      <Drawer
        anchor={"bottom"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedDeals &&
            selectedDeals.map((dealCompare) => {
              return (
                <CompareDeals
                  selectedDeal={dealCompare}
                  removeDeal={removeDeal}
                />
              );
            })}
          <CustomButton
            text={`Compare deals (${selectedDeals.length} of 2)`}
            handleClick={handleClick}
          />
        </div>
      </Drawer>
    </div>
  );
}
