import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

