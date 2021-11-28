import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TableContainer } from "@mui/material";
import StarRating from "../StarRating";
import Paper from "@mui/material/Paper";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const styles = {
    root: {},
    paper: { borderRadius: 15 },
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="lg"
      classes={{ root: styles.root, paper: styles.paper }}
    >
      <TableContainer
        component={Paper}
        sx={{
          m: "auto",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <DialogTitle style={{ fontWeight: 800, fontSize: "30px" }}>
          Compare
        </DialogTitle>
        <table class="table table-striped" style={{ width: "1200px" }}>
          <thead>
            <tr>
              <th scope="col"></th>
              {selectedValue.map((value) => {
                return (
                  <th scope="col">
                    <div style={{ display: "flex" }}>
                      <img
                        src={value.provider_logo_image_url}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                      <div
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <h3>{value.provider_name}</h3>
                        <p>{value.data_limits}</p>
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Rating</th>
              {selectedValue.map((value) => {
                return (
                  <td>
                    <StarRating rating={value.provider_rating} />
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Monthly Cost</th>
              {selectedValue.map((value) => {
                return <td>£{value.monthly_price.toFixed(2)}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Tariff Type</th>
              {selectedValue.map((value) => {
                return <td>{value.deal_type}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Speed</th>
              {selectedValue.map((value) => {
                return <td>{value.internet_speed} Mbps</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Broadband Type</th>
              {selectedValue.map((value) => {
                return <td>{value.broadband_type}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Set Up Cost</th>
              {selectedValue.map((value) => {
                return <td>£{value.set_up_cost}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">One Off Cost</th>
              {selectedValue.map((value) => {
                return <td>£0</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Term End</th>
              {selectedValue.map((value) => {
                return <td>{value.contract_info}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">Data Limits</th>
              {selectedValue.map((value) => {
                return <td>£{value.data_limits}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DialogBox({ selectedDeals }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {`Compare deals (${selectedDeals.length} of 2)`}
      </Button>

      <SimpleDialog
        selectedValue={selectedDeals}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
