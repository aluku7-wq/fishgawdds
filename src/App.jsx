import React from "react";
import { Route, Routes } from "react-router-dom";
import Cursor from "./componets/cursor/Cursor";
import Navigation from "./componets/navigation/Navigation";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
