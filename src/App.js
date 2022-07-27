import React from "react";
import { Routes, Route } from "react-router-dom";
import Tables from "./Components/Tables";
import Home from "./Layouts/Home";
import Navbar from "./Layouts/Navbar";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Protected from "./Route/Protected";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/table" element={<Tables />} />
      </Routes>
    </div>
  );
}

export default App;
