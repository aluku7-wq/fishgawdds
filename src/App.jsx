import React from "react";
import { Route, Routes } from "react-router-dom";
import Cursor from "./componets/cursor/Cursor";
import Navigation from "./componets/navigation/Navigation";
import ProtectedRoute from "./componets/protectected/ProtectedRoute";
import Admin from "./pages/admin/Admin";
import { Auth } from "./pages/auth/Auth";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/user/User";

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/:id" element={<Auth />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
