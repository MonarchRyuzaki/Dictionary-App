/* eslint-disable no-unused-vars */
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SearchBar({ setText, isDarkMode }) {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData){
      setText(formData);
      setFormData("");
    }
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
        autoComplete="off"
        sx={{
          backgroundColor: isDarkMode ? "#1a1a1a" : "white", // Dark background in dark mode
          color: isDarkMode ? "#f0f0f0" : "black",
          "& input": {
            color: isDarkMode ? "#f0f0f0" : "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isDarkMode ? "#f0f0f0" : "rgba(0, 0, 0, 0.23)",
          },
          "& .MuiInputLabel-root": {
            color: isDarkMode ? "#f0f0f0" : "black",
          },
          "&:hover": {
            backgroundColor: isDarkMode ? "#2a2a2a" : "white", // Change the background color on hover
          },
        }}
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
