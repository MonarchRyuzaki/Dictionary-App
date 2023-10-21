import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import "./reset.css";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [text, setText] = useState("hello");
  const [responseData, setResponseData] = useState([]); // State to store response data
  const [loading, setLoading] = useState(false);
  const [font, setFont] = useState("serif");
  const savedPreference = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(savedPreference === "true");

  useEffect(() => {
    const body = document.querySelector("body");
    const cont = document.querySelector(".container");

    if (cont && cont.classList.contains("dark")) {
      body.style.backgroundColor = "#1a1a1a";
      body.style.color = "#f0f0f0";
    }
    if (cont && cont.classList.contains("light")) {
      body.style.color = "#1a1a1a";
      body.style.backgroundColor = "#fff";
    }
  }, [isDarkMode]);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      const response = await axios.get(`${url}${text}`);
      setLoading(true);
      setResponseData(response.data);
    }
    fetchData();
  }, [text, font, isDarkMode]);
  return (
    <div
      className={`container ${isDarkMode ? "dark" : "light"}`}
      style={{ fontFamily: font }}
    >
      <Navbar setFont={setFont} font={font} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <SearchBar setText={setText} isDarkMode={isDarkMode}/>
      {!loading && <Spinner />}
      {loading && <Main data={responseData[0]} />}
    </div>
  );
}

export default App;
