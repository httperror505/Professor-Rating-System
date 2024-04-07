import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App () {

  return (

    <div className="App" id="body">
      <div className="login">
        <Login/>
      </div>
    </div>

      // <Router>
      //         <div className="App">
      //               <ul className="App-header">
      //                   <li>
      //                       <Link to="/">Home</Link>
      //                   </li>
      //                   <li>
      //                       <Link to="/about">
      //                           About Us
      //                       </Link>
      //                   </li>
      //                   <li>
      //                       <Link to="/contact">
      //                           Contact Us
      //                       </Link>
      //                   </li>
      //               </ul>

      //               <Routes>
      //                   <Route
      //                       path="/"
      //                       element={<Login />}
      //                   ></Route>
      //                   <Route
      //                       path="/about"
      //                       element={<Hero />}
      //                   ></Route>
      //                   <Route
      //                       path="/contact"
      //                       element={<Footer />}
      //                   ></Route>
      //               </Routes>
      //           </div>
      //       </Router>

  );

}

export default App;