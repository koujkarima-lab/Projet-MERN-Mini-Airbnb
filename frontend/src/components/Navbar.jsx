import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <h2 style={{ color: "#fff" }}>Mini Airbnb</h2>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}
