import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function TemporaryDrawer({ data, key }) {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [select, setSelect] = React.useState(false);
  const [text, setText] = React.useState("Add to Compare");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setSelect(!select);
    if (!select) {
      setText("Remove");
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={data}>
          <ListItemText primary={data.provider_name} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"bottom"}>
        <Button onClick={toggleDrawer("bottom", true)}>{text}</Button>
        <Drawer
          anchor="bottom"
          open={state.bottom}
          onClose={toggleDrawer("bottom", false)}
        >
          {list("bottom")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
