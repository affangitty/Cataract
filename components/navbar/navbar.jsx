import React from 'react'
import logo from "../../../public/images/logo.png"
import search from "../../../public/images/search.png"
import cart from "../../../public/images/cart.png"
import "./navbar.css"

const navbar = () => {
  return (
    <div className="section">
      <img src={logo} className="logo"/>
      <div className="nav">
        <p id="home">Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Contact</p>
      </div>
      <div className="icons">
        <img src={search} className="search" />
        <img src={cart} className="cart" />
      </div>
    </div>
  )
}

export default navbar
