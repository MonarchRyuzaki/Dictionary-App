import './reset.css'
import './App.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main'


const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

function App() {
  const [text, setText] = useState("hello");
  const [responseData, setResponseData] = useState([]); // State to store response data
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(`${url}${text}`);
      console.log(response.data);
      setResponseData(response.data);
      setLoading(true);
    }
    fetchData();
  }, [text, setText])
  return (
    <div className = "container">
      <Navbar />
      <SearchBar setText = {setText} />
      {loading && <Main data = {responseData[0]}/>}
    </div>
  )
}

export default App
