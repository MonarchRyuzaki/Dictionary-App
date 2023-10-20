import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const buttonStyle = {
  backgroundColor: "white",
  color: "black",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  boxShadow: "none",
  textTransform: "none",
};

export default function FontSelector() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={buttonStyle}
        onClick={handleClick}
        variant="contained"
        color="primary"
        endIcon={<ArrowDropDownIcon />}
      >
        Serif
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}
