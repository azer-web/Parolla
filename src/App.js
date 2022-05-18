import './App.css';
import Navbar from './Components/Navbar';
import Letters from './Components/Letters';
import Questions from './Components/Questions';
import Reply from './Components/Reply';
import { useEffect } from 'react';
// import getMAC from 'getmac'
// const MacAddress = require('get-mac-address');

function App() {
  useEffect(() => {
    // console.log(MacAddress())

  }, [])
  
  return (
    <div className="container">
     <Navbar></Navbar>
     <Letters></Letters>
     <Questions></Questions>
     <Reply></Reply>
    </div>
  );
}

export default App;
