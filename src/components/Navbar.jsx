import { ColorSchemeSelector, FontSelector } from ".";
import "../styles/Navbar.css";

export default function Navbar({setFont, font, setIsDarkMode, isDarkMode}) {
  const src = "/assets/images/"
  return (
    <div className="Navbar">
      <img src={src+"logo.svg"} alt="" className="logo" />
      <div className="w">
        <FontSelector className="font-selector" setFont={setFont} font = {font} isDarkMode = {isDarkMode}/>
        <ColorSchemeSelector className="scheme-selector" setIsDarkMode={setIsDarkMode} isDarkMode = {isDarkMode}/>
      </div>
    </div>
  );
}
