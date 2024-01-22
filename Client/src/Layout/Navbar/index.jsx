import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
    return (
        <>

            <nav>
                <div className="Tasty">
                    <h1>TASTY</h1>
                </div>
                <div className="Navbar">
                    <ul id='mainNav'>
                        <li><NavLink to={"/home"}>Home</NavLink></li>
                        <li>Menu</li>
                        <li>Specialties</li>
                        <li>Reservation</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><NavLink to={"/add"}>Add Page</NavLink></li>
                        <li><NavLink to={"/basket"}><FaShoppingBasket /></NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar