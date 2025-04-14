//  14-04-25

// lets see how to do routimg in react
// lets see =>

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  return(
  <>
    <Router>

    <Link to="/">Home</Link>
    &nbsp;   &nbsp;
    <Link to="/about">About</Link>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes>

    </Router>
  </>

  )
};

export default App;
