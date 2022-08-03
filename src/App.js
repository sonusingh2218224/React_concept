import React from "react";
import { Routes, Route } from "react-router-dom";

import Tables from "./Components/Tables";
import Home from "./Layouts/Home";
import Navbar from "./Layouts/Navbar";
import Cart from "./Pages/Cart/CartPage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Protected from "./Route/Protected";

export const CartContext = React.createContext();
function App() {
  const [cart, setCart] = React.useState({
    items: [],
  });

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/table" element={<Tables />} />
         <Route path="/cart"  element={<Protected Component={Cart} />} /> 
      </Routes>
        {/* <Routes>
          <Route exact={true} path={"/home"} element={<Home />} />
          <Route exact={true} path={"/table"} element={<Tables />} />
          <Route exact={true} path={"/register"} element={<Register />} />
          <Route exact={true} path={"/login"} element={<Login />} />
          <Route element={<Protected isLoggedIn={ element={Login} />}>
            <Route exact={true} path={"/dashboard"} element={<Dashboard />} />
            <Route exact={true} path={"/cart"} element={<Cart/>} />
          </Route>
        </Routes> */}
      </CartContext.Provider>
    </div>
  );
}

export default App;
