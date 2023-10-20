import { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import "./ColourSchemeSelector.css"

export default function ColorSchemeSelctor(){
    const [isChecked, setIsChecked] = useState(false);
    
    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
    
    return (
    <div className='colour-toggle'>
        <FormControlLabel
          control={<Switch checked={isChecked} onChange={handleToggle} />
        }
        />
        <img src="../assets/icon-moon.svg" alt="" />
    </div>
    );
}