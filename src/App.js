import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { signOut } from "firebase/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

import "./App.css";
import { auth } from "./firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        {!isAuth ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <>
            <Link to={"/createpost"}>Create Post</Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
