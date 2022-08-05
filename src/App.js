import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Tables from "./Components/Tables";
import Home from "./Layouts/Home";
import Navbar from "./Layouts/Header";
import Cart from "./Pages/Cart/CartPage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Protected from "./Route/Protected";
import Checkout from "./Pages/Chekout";

export const CartContext = React.createContext();
function App() {
  const [cart, setCart] = React.useState({
    items: [],
  });

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />
        
          <Routes>
            <Route
              excat
              path="/home"
              element={<Protected Component={Home} />}
            />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} />}
            />
            <Route path="/table" element={<Protected Component={Tables} />} />

            <Route path="/cart" element={<Protected Component={Cart} />} />

            <Route
              path="/checkout"
              element={<Protected Component={Checkout} />}
            />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
