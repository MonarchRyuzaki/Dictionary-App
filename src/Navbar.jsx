import ColorSchemeSelctor from "./ColourSchemeSelector";
import FontSelector from "./FontSelector";
import "./Navbar.css";

export default function Navbar({setFont, font, setIsDarkMode, isDarkMode}) {
  const src = "src/assets/images/"
  return (
    <div className="Navbar">
      <img src={src+"logo.svg"} alt="" className="logo" />
      <div className="w">
        <FontSelector className="font-selector" setFont={setFont} font = {font} isDarkMode = {isDarkMode}/>
        <ColorSchemeSelctor className="scheme-selector" setIsDarkMode={setIsDarkMode} isDarkMode = {isDarkMode}/>
      </div>
    </div>
  );
}
