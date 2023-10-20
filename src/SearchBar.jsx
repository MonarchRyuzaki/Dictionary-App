/* eslint-disable no-unused-vars */
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SearchBar({ setText }) {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    console.log(changedField, newValue);
    setFormData(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(formData);
    setFormData("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={formData}
        name="searchKey"
        onChange={handleChange}
      />
      <SearchIcon
        style={{
          position: "absolute",
          right: "25px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default SearchBar;
