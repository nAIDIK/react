//  14-04-25

// lets see how to do routimg in react
// lets see =>

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  return(
  <>
    <Router>

    <Link to="/">Home</Link>
    &nbsp;   &nbsp;  &nbsp;
    <Link to="/about">About</Link>
    &nbsp;   &nbsp;  &nbsp;
    <Link to="/blogs">Blogs</Link>
    &nbsp;   &nbsp;  &nbsp;
    <Link to="/contact">Contact</Link>
    &nbsp;   &nbsp;  &nbsp;
    <Link to="/login">Login</Link>
    &nbsp;   &nbsp;  &nbsp;
    <Link to="/signup">Signup</Link>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

      </Routes>

    </Router>
  </>

  )
};

export default App;
