import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";


export default function FontSelector({setFont, font, isDarkMode}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonStyle = {
    backgroundColor: "inherit",
    color: isDarkMode?"#f0f0f0":"#1a1a1a",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    boxShadow: "none",
    textTransform: "none",
    transition: "none"
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setFont(e.currentTarget.getAttribute("data-value"));  
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
        {font}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} data-value = "Serif">Serif</MenuItem>
        <MenuItem onClick={handleClose} data-value = "Inconsolata">Inconsolata</MenuItem>
        <MenuItem onClick={handleClose} data-value = "Inter">Inter</MenuItem>
        <MenuItem onClick={handleClose} data-value = "Lora">Lora</MenuItem>
      </Menu>
    </div>
  );
}
