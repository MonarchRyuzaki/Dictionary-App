import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import "../styles/ColourSchemeSelector.css";

export default function ColorSchemeSelector({ setIsDarkMode }) {
  const savedPreference = localStorage.getItem("darkMode");
  const [isChecked, setIsChecked] = useState(savedPreference === "true");

  const handleToggle = () => {
    const newMode = !isChecked;
    setIsChecked(newMode);
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const src = "/assets/images/";

  return (
    <div className="colour-toggle">
      <FormControlLabel
        control={<Switch checked={isChecked} onChange={handleToggle} />}
      />
      <img src={src + "icon-moon.svg"} alt="" />
    </div>
  );
}
