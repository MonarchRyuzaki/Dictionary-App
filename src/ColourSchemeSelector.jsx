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

    const src = "src/assets/images/"
    
    return (
    <div className='colour-toggle'>
        <FormControlLabel
          control={<Switch checked={isChecked} onChange={handleToggle} />
        }
        />
        <img src={src+"icon-moon.svg"} alt="" />
    </div>
    );
}