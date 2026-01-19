import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import PlaceDetails from "./pages/PlaceDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
