
import { Link } from "react-router-dom"
import "./SubNavbar.css"
import axios from "axios"
import React, { useState, useEffect } from 'react';

export default function SubNavbar() {

    return (
        <nav className="sub-navbar">
            <div className="content">
                <div className="row">
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search"  />

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
                        <i className="material-icons">menu</i>
                    </div>
                </div>
            </div>
        </nav>
    )
}