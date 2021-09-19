import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navigation">
          <div className="nav-logo">
            <Link to="/">WorldTravel</Link>
          </div>
          <div className="navbar-nav">
            <i className="fas fa-bars"></i>
            <a href="/">Countries</a>
            <Link to="/">EN</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
