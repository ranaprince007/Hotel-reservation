import "./Navbar.css"
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">suyashBooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
