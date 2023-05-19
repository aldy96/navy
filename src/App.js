import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {

  const [numer, setNum] = useState(0)

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/")
    const data = response.data
   
    setNum(data)
    
  };

useEffect(() => {
  fetchData()
}, []
)


  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {numer.abc} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
