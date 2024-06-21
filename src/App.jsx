import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api";
import { Content, Navbar, SearchBar, Spinner } from "./components";

function App() {
  const [text, setText] = useState("hello");
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    async function fetchData(text) {
      setLoading(true);
      try {
        const response = await getData(text);
        setResponseData([response]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData(text);
  }, [text]);

  return (
    <div
      className={`container ${isDarkMode ? "dark" : "light"}`}
      style={{ fontFamily: font }}
    >
      <Navbar
        setFont={setFont}
        font={font}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
      />
      <SearchBar setText={setText} isDarkMode={isDarkMode} />
      {loading && <Spinner />}
      {!loading && <Content data={responseData[0]} />}
    </div>
  );
}

export default App;
