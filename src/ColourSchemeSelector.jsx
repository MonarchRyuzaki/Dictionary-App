import { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import "./ColourSchemeSelector.css"

export default function ColorSchemeSelctor({setIsDarkMode}){
  const savedPreference = localStorage.getItem("darkMode");
    const [isChecked, setIsChecked] = useState(savedPreference === "true");
    
    const handleToggle = () => {
      const newMode = !isChecked;
      setIsChecked(newMode);
      setIsDarkMode(newMode);
      localStorage.setItem("darkMode", newMode);
    };
    
    return (
    <div className='colour-toggle'>
        <FormControlLabel
          control={<Switch checked={isChecked} onChange={handleToggle} />
        }
        />
        <img src="./assets/icon-moon.svg" alt="" />
    </div>
    );
}