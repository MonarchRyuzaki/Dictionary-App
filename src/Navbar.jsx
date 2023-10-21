import ColorSchemeSelctor from "./ColourSchemeSelector";
import FontSelector from "./FontSelector";
import "./Navbar.css";

export default function Navbar({setFont, font, setIsDarkMode, isDarkMode}) {
  return (
    <div className="Navbar">
      <img src="./assets/logo.svg" alt="" className="logo" />
      <div className="w">
        <FontSelector className="font-selector" setFont={setFont} font = {font} isDarkMode = {isDarkMode}/>
        <ColorSchemeSelctor className="scheme-selector" setIsDarkMode={setIsDarkMode} isDarkMode = {isDarkMode}/>
      </div>
    </div>
  );
}
