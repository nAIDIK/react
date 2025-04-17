//  14-04-25

// lets see how to do routimg in react
// lets see =>

  import React from "react";
import Form from "./Components/Form";
  // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  // import Home from "./Components/Home";
  // import About from "./Components/About";
  // import Blogs from "./Components/Blogs";
  // import Contact from "./Components/Contact";
  // import Login from "./Components/Login";
  // import SignInPage from "./Components/SignInPage";
  // import Cards from "./Components/Cards";
// import CredentialsSignInPage from "./CredentialsSignInPage";

  
  const App = () => {
    return (
      <>
      {/* <CredentialsSignInPage/> */}
      <Form />
{/*       
        <Router>
          <Link to="/">Home</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/about">About</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/blogs">Blogs</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/contact">Contact</Link>
          &nbsp; &nbsp; &nbsp;
             <Link to="/login">Login</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="/signin">SignInPage</Link>
          &nbsp;  &nbsp;   &nbsp;
          <Link to="/cards">Cards</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path ="/cards" element= {<Cards/>}></Route>
          </Routes>
        </Router> */}
      </>
    );
  };
  
  export default App;

// 17-04-25


