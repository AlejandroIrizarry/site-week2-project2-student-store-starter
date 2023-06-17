import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import * as React from "react"
import Twitter from "../../Icons/Twitter"
import Instagram from "../../Icons/Instagram"
import Facebook from "../../Icons/Facebook"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="codepath logo" />
            </a>
          </div>

          <div className="socials">
            <Twitter fill="var(--pure-white)"/>
            <Instagram fill="var(--pure-white)"/>
            <Facebook fill="var(--pure-white)"/>
          </div>

            <ul className="links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#Buy">Buy Now</a>
              </li>
              <li>
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
      </div>
    </nav>
  )
}
