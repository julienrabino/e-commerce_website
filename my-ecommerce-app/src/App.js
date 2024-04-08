import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router and Routes
// import {useNavigate} from "react-router-dom";
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Loginpage from './components/Loginpage';



const App = () => {
  // if (localStorage.getItem("start") == null){
  //   localStorage.setItem("start", "true")
  //   localStorage.clear();
  // }
  // if (localStorage.getItem('loggedIn') == null){
  //   localStorage.setItem('loggedIn',false);
  // }
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() =>{
    const temp = localStorage.getItem('Approve');
    if (temp === "true"){
      setLoggedIn(true);
      localStorage.clear();
    }else{
      setLoggedIn(false)
      localStorage.setItem('Approve', 'false');
    }
  }, [])
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={loggedIn ? <Productpage/>: <Homepage />} />
          <Route path="/products" element={loggedIn  ? <Productpage/>: <Loginpage/>} />  
          <Route path="/login" element={<Loginpage/>} />  
        </Routes>
      </div>
    </Router>
  );
};

export default App;
