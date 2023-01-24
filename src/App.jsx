import React from "react";
import { Route, Routes } from "react-router-dom";
import Cursor from "./componets/cursor/Cursor";
import Navigation from "./componets/navigation/Navigation";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
