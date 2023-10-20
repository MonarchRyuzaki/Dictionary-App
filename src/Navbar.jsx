import ColorSchemeSelctor from "./ColourSchemeSelector";
import FontSelector from "./FontSelector";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src="../assets/logo.svg" alt="" className="logo" />
      <div className="w">
        <FontSelector className="font-selector" />
        <ColorSchemeSelctor className="scheme-selector" />
      </div>
    </div>
  );
}
