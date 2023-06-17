
import { Link } from "react-router-dom"
import "./SubNavbar.css"
import React, { useState } from 'react';

export default function SubNavbar({handleSearch, searchValue, activeCategory, setActiveCategory}) {

    const [open, setOpen] = useState(true)

    const categories = [
        "All Categories",
        "Clothing",
        "Food",
        "Accessories",
        "Tech"
    ]
    

    const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen))

    return (
        <nav className="sub-navbar">
            <div className="content">
                <div className="row">
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search" value={searchValue} onChange={handleSearch}/>

                        <i className="material-icons">search</i>
                    </div>
                    <div className="links">
                        <span className="help">
                            <i className="material-icons">help</i>
                            Help
                        </span>
                        <div className="cart">
                            <Link>
                                My Cart
                                <i className="material-icons">shopping_cart</i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="hamburger-menu">
                        <i className="material-icons" onClick={() => toggleOpen()}>menu</i>
                    </div>
                </div>

                <ul className={`category-menu ${open ? `open` : `closed`}`}>
            {categories.map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>

            </div>
        </nav>
    )
}